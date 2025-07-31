import { Request, Response, NextFunction } from 'express';
import { FilterParam, QueryParam } from '../utils/types';

export const extractParamMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const extractStudi = (data: any): string[] | undefined => {
        return data ? data.split(',').map((k: string) => k.trim()).filter(Boolean) : undefined;
    };

    const extractHarga = (data: any): number[] | undefined => {
        return data ? data.split(',').map((k: string) => Number(k.trim())).filter(Boolean) : undefined;
    };

    const extractDurasi = (data: any): number[] | undefined => {
        return data ? data.split(',').map((k: string) => Number(k.trim())).filter(Boolean) : undefined;
    };

    const extractFilter = (data: any): FilterParam | undefined => {
        const params = data ? data.split(',').map((k: string) => k.trim()).filter(Boolean) : undefined;
        if (params) {
            return {
                field: params.length > 1 ? params[0] : undefined,
                order: params.length > 1 ? params[1] : params[0],
            }
        }
        return undefined
    };

    const queryParam: QueryParam = {
        studi: extractStudi(req.query.studi),
        harga: extractHarga(req.query.harga),
        durasi: extractDurasi(req.query.durasi),
        filter: extractFilter(req.query.filter),
        search: req.query.search as string,
    };

    req.queryParam = queryParam;

    next();
};
