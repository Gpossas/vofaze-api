import { Request } from 'express';
import { Provider } from 'src/provider/entities/provider.entity';

export interface AuthRequest extends Request {
  user: Provider;
}
