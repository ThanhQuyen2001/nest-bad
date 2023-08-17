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
    }
]

function hasPermission(can: CanDto): boolean {
    return permissions.includes(can)
}

@Injectable()
export class TokenGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const can = this.reflector.get<CanDto>('can', context.getHandler());
        if (hasPermission(can)) {
            return true
        }
        return false
    }
}