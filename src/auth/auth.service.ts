import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { Provider } from 'src/provider/entities/provider.entity';
import { ProviderService } from 'src/provider/provider.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { Client } from 'src/client/entities/client.entity';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly providerService: ProviderService,
    private readonly clientService: ClientService,
  ) {}

  async login(user: Provider | Client): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
      ...user,
    };
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Provider | Client> {
    const user = await this.providerService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
