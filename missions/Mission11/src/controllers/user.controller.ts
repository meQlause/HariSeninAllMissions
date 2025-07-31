import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { userRegisterDTO, userLoginDTO, userVerifyDTO } from '../dtos/user.dto';

export const login = async (req: Request, res: Response) => {

    try {
        const data: userLoginDTO = req.body;
        const credentials = await userService.userLogin(data);
        res.status(201).json(credentials);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed retrieving data' });
    }
};

export const register = async (req: Request, res: Response) => {

    try {
        const data: userRegisterDTO = req.body;
        const status = await userService.userRegister(data);
        res.status(201).json(status);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create produk' });
    }
};

export const verify = async (req: Request, res: Response) => {

    try {
        const data: userVerifyDTO = {
            email: req.query.email as string,
            token: req.query.token as string
        };
        const status = await userService.verifyUserEmail(data);

        res.status(201).json(status);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create produk' });
    }
};