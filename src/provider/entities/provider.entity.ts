import { ProviderType } from '@prisma/client';

export class Provider {
  id?: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  url_image?: string;
  type: ProviderType;
}
