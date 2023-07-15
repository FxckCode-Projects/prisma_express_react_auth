import express, {NextFunction, Request, Response} from 'express'
import { findUserById, findUsers } from './users.service'
import { isAuthenticated } from '../middlewares'
import type { User } from '@prisma/client'
import { RequestPayload } from '../interfaces/RequestPayload'
import { ParsedToken } from '../interfaces/ParsedToken'

const router = express.Router();

router.get("/profile", isAuthenticated, async (req: RequestPayload, res, next) => {
    try {
        const { userId } = req.payload as ParsedToken;
        const user = await findUsers()
        res.json(user)
    } catch (err) {
        next(err)
    }
})

export default router;