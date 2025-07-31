import 'express';
import { QueryParam } from '../../utils/types';

declare global {
    namespace Express {
        interface Request {
            queryParam?: QueryParam;
        }
    }
}
