import prisma from "../db";
import { hashToken } from "../utils/hashToken";

function addRefreshTokenToWhitelist({jti, refreshToken, userId} : {jti: string, refreshToken: string, userId: string}) {
    return prisma.refreshToken.create({
        data: {
            id: jti,
            hashedToken: hashToken(refreshToken),
            userId
        }
    })
}

function findRefreshTokenById(id: string | undefined) {
    return prisma.refreshToken.findUnique({
        where: {
            id
        }
    })
}

function deleteRefreshToken(id: string) {
    return prisma.refreshToken.update({
        where: {
            id
        },
        data: {
            revoke: true
        }
    })
}

function revokeTokens(userId: string) {
    return prisma.refreshToken.updateMany({
        where: {
            userId
        }, data: {
            revoke: true
        }
    })
}

export {addRefreshTokenToWhitelist, findRefreshTokenById, deleteRefreshToken, revokeTokens}