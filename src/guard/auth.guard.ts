import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { CanDto } from 'src/decorator/permission/permission.dto';

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

function hasPermission(can: CanDto): boolean {
    return permissions.some(p => p.action === can.action && p.subject === p.subject)
}

@Injectable()
export class TokenGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const can = this.reflector.get<CanDto>('can', context.getHandler());
        return hasPermission(can)
    }
}