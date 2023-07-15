import { Router } from "express";
import prisma from "../db";
import bcrypt from 'bcrypt'
import { UserRequest } from "../interfaces/UserRequest";

function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

function createUserByEmailAndPassword(user: UserRequest) {
    user.password = bcrypt.hashSync(user.password, 12)
    return prisma.user.create({
        data: user
    })
}


function findUserById(id: string) {
    return prisma.user.findUnique({
        where: {
            id
        }
    })

}


export { findUserByEmail, findUserById, createUserByEmailAndPassword}
