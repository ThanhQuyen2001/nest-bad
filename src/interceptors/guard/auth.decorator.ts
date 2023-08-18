import { SetMetadata } from '@nestjs/common';
import { AUTH_SKIP_KEY, PERMISSION_KEY } from 'src/configs/auth.config';

export const SkipAuth = () => SetMetadata(AUTH_SKIP_KEY, true);

export const Can = (action: string, subject: string) => SetMetadata(PERMISSION_KEY, {
    action: action,
    subject: subject
})