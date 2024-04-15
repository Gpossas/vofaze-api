import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Provider } from 'src/provider/entities/provider.entity';
import { AuthRequest } from '../models/AuthRequest';
import { Client } from 'src/client/entities/client.entity';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Provider | Client => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
