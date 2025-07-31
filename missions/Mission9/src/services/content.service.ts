import pool from '../config/db';
import { addCourseDTO } from '../dtos/addCourse.dto';

export const getAllProducts = async () => {
    const result = await pool.query('SELECT * FROM produk');
    return result.rows;
};

export const getProductById = async (id: number) => {
    const result = await pool.query(
        'SELECT * FROM produk WHERE id = $1',
        [id]
    );
    return result.rows[0];
};

export const deleteProductById = async (id: number) => {
    const result = await pool.query(
        'DELETE FROM produk WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0]; 
};


export const createproduct = async (data: addCourseDTO) => {
    const query = `
    INSERT INTO produk (
        tutor_id,
        kategori_kelas,
        judul,
        tagline,
        deskripsi
    ) VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;

    const values = [
        data.tutor_id,
        data.kategori_kelas,
        data.judul,
        data.tagline,
        data.deskripsi
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
};


export const updateProductById = async (id: number, data: addCourseDTO) => {
    const fields = [];
    const values = [];
    let i = 1;

    for (const [key, value] of Object.entries(data)) {
        if (value !== undefined) {
            fields.push(`${key} = $${i}`);
            values.push(value);
            i++;
        }
    }

    if (fields.length === 0) return null;

    const query = `
    UPDATE produk
    SET ${fields.join(', ')}
    WHERE id = $${i}
    RETURNING *;
  `;

    values.push(id);

    const result = await pool.query(query, values);
    return result.rows[0];
};
