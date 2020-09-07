import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NoteService } from './notes.service';

@Module({
  controllers: [AppController],
  providers: [NoteService]
})
export class NoteModule {}
