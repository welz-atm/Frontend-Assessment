import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { NoteModule } from './notes/notes.module';
import { NoteService } from './notes/notes.service';
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


describe('Note', () => {
  let app: INestApplication;
  let noteService = { update: () => ['test'] };

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

  it(`/PUT notes/:id`, () => {
    return request(app.getHttpServer())
      .put('notes/:id')
      .expect(200)
      .expect({
        data: noteService.update(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});


describe('Note', () => {
  let app: INestApplication;
  let noteService = { findMany: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [NotesModule],
    })
      .overrideProvider(NotesService)
      .useValue(notesService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET /users/:username/notes`, () => {
    return request(app.getHttpServer())
      .get('/users/:username/notes')
      .expect(200)
      .expect({
        data: noteService.findMany(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});


describe('Notes', () => {
  let app: INestApplication;
  let noteService = { findMany: () => ['test'] };

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

  it(`/GET notes`, () => {
    return request(app.getHttpServer())
      .get('/notes')
      .expect(200)
      .expect({
        data: noteService.findMany(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});


describe('Note', () => {
  let app: INestApplication;
  let noteService = { delete: () => ['test'] };

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

  it(`/DELETE notes/:id`, () => {
    return request(app.getHttpServer())
      .get('notes/:id')
      .expect(200)
      .expect({
        data: noteService.delete(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});