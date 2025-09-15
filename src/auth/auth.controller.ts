import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  private static readonly SALT_ROUNDS = 10;
  @Post('create')
  async createUser(@Body() body: { email: string; password: string }) {
    const hash = await bcrypt.hash(body.password, 10);
    return {
      email: body.email,
      password: hash,
    };
  }
}
