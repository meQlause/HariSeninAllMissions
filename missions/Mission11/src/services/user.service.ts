import pool from '../config/db';
import { userLoginDTO, userRegisterDTO, userVerifyDTO } from '../dtos/user.dto';
import { generateUUIDToken } from '../utils/generateUuidToken';
import { generateJWTToken } from '../utils/jwtUtil';
import { comparePassword, hashPassword } from './../utils/passwordHash';
import * as emailService from './email.service';

export const userLogin = async (data: userLoginDTO) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1;',
        [data.email]
    );

    if (result.rowCount === 0) {
        throw new Error('User not found');
    }

    if (!await comparePassword(data.kata_sandi, result.rows[0].kata_sandi)) {
        throw new Error('User Login Error');
    };

    return generateJWTToken({ id: result.rows[0].id, email: result.rows[0].email });
};

export const userRegister = async (data: userRegisterDTO) => {
    const query = `
    INSERT INTO users (
        nama_lengkap,
        jenis_kelamin,
        no_hp,
        email,
        kata_sandi
    ) VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;

    const values = [
        data.nama_lengkap,
        data.jenis_kelamin,
        data.no_hp,
        data.email,
        await hashPassword(data.kata_sandi)
    ];

    const result = await pool.query(query, values);

    try {
        await verificateEmail(data.email);
    } catch (err) {
        console.error('Email verification failed');
    }

    return result.rows[0];

};

export const verifyUserEmail = async (data: userVerifyDTO): Promise<boolean> => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        const tokenRes = await client.query(
            `SELECT * FROM verification_tokens WHERE token = $1`,
            [data.token]
        );

        if (tokenRes.rowCount === 0) {
            throw new Error('Token not found');
        }

        const tokenRow = tokenRes.rows[0];

        if (new Date(tokenRow.expires_at) < new Date()) {
            throw new Error('Token expired');
        }

        const userRes = await client.query(
            `SELECT * FROM users WHERE email = $1`,
            [data.email]
        );

        if (userRes.rowCount === 0) {
            throw new Error('User not found or email does not match');
        }

        await client.query(
            `UPDATE users SET is_verified = TRUE WHERE email = $1`,
            [tokenRow.email]
        );

        await client.query(
            `DELETE FROM verification_tokens WHERE token = $1`,
            [data.token]
        );

        await client.query('COMMIT');
        return true;

    } catch (err: any) {
        await client.query('ROLLBACK');
        console.error('Email verification failed:', err.message);

        return false;
    } finally {

        client.release();
    }
};


const verificateEmail = async (email: string) => {
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
    const token = generateUUIDToken();
    const query =
        `
            INSERT INTO verification_tokens (token, email, expires_at)
            VALUES ($1, $2, $3)
        `;

    try {
        await pool.query(query, [token, email, expiresAt]);
        emailService.sendVerificationEmailTo(email, token)
    } catch (err) {
        throw new Error('Failed Add new token');
    }
}

