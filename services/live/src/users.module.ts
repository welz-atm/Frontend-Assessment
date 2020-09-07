import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './users.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AppController],
  providers: [UserService, LocalStrategy],
  imports: [UserModule, PassportModule],
  exports: [UserService],
})
export class UserModule {}
