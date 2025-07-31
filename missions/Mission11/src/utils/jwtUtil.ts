import jwt from 'jsonwebtoken';

const SECRET_KEY = 'Mission11';
const EXPIRES_IN = '1h'; 

export const generateJWTToken = (payload: object): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
};

export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
};
