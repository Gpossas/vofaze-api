import { Request } from 'express';
import { Client } from 'src/client/entities/client.entity';
import { Provider } from 'src/provider/entities/provider.entity';

export interface AuthRequest extends Request {
  user: Provider | Client;
}
