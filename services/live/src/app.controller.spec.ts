import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { NoteService } from './notes.service';
import { NoteModule } from './notes.module';
import request from "supertest";
import { INestApplication } from '@nestjs/common';


describe('Note', () => {
  let app: INestApplication;
  let noteService = { create: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [NoteModule],
    })
      .overrideProvider(NoteService)
      .useValue(noteService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST notes/create`, () => {
    return request(app.getHttpServer())
      .post('notes/create')
      .expect(200)
      .expect({
        data: noteService.create(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
