import { SetMetadata } from '@nestjs/common';

export const Can = (action: string, subject: string) => SetMetadata('can', {
    action: action,
    subject: subject
})