import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Provider } from 'src/provider/entities/provider.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Provider => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
