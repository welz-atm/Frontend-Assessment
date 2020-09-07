import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './notes.module';
import { UserModule } from './users.module';

@Module({
  imports: [NoteModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
