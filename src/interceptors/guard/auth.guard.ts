import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AUTH_SKIP_KEY, PERMISSION_KEY } from 'src/configs/auth.config';
import { checkToken, hasPermission } from 'src/helpers/auth.helper';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        try {
            // skip
            let skipGuard = this.reflector.get<boolean>(AUTH_SKIP_KEY, context.getHandler());
            if (skipGuard) return true

            // token
            let request = context.switchToHttp().getRequest();
            let token = request.headers.authorization?.split(' ')[1];
            if (token && checkToken(token)) {
                // permission
                let can = this.reflector.get<{ action: string, subject: string }>(PERMISSION_KEY, context.getHandler());
                return hasPermission(can)
            }
            else {
                return false
            }
        } catch (error) {
            return false
        }
    }
}