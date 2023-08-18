import jwt from 'jsonwebtoken';
import { PRIVATE_KEY, TIME_EXPIRE } from "../configs/jwt.config";
const permissions = [
    {
        action: 'create',
        subject: 'users'
    },
    {
        action: 'update',
        subject: 'users'
    },
    {
        action: 'delete',
        subject: 'users'
    },
    {
        action: 'list',
        subject: 'users'
    },
    {
        action: 'read',
        subject: 'users'
    },
    {
        action: 'create',
        subject: 'todos'
    },
    {
        action: 'update',
        subject: 'todos'
    },
    {
        action: 'delete',
        subject: 'todos'
    },
    {
        action: 'list',
        subject: 'todos'
    },
    {
        action: 'read',
        subject: 'todos'
    }
]
const hasPermission = (can: { action: string, subject: string }): boolean => {
    return permissions.some(p => p.action === can.action && p.subject === p.subject)
}

const createToken = (data: any): string => {
    const token = jwt.sign(data, PRIVATE_KEY, { expiresIn: TIME_EXPIRE });
    return token
}

const checkToken = (token: string): any => {
    try {
        const dataDecoded = jwt.verify(token, PRIVATE_KEY);
        return !!dataDecoded
    } catch (error) {
        console.error('Invalid token:', error.message);
    }
}

export {
    createToken,
    checkToken,
    hasPermission
}