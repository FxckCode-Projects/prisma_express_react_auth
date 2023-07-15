import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

function generateAccessToken(user: User) {
    return jwt.sign({ userId: user }, 'secret', {
        expiresIn: "8h"
    })
}

function generateRefreshToken(user: User, jti: string) {
    return jwt.sign(
        {
            userId: user.id,
            jti
        },
        'secret',
        {
            expiresIn: '8h'
        }
    )
}

function generateTokens(user: User, jti: string) {
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user, jti)

    return {
        accessToken,
        refreshToken
    }
}

export {generateAccessToken, generateTokens, generateRefreshToken}