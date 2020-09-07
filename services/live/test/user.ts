import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UsersModule } from './notes/notes.module';
import { UsersService } from './notes/notes.service';
import { INestApplication } from '@nestjs/common';


describe('User', () => {
  let app: INestApplication;
  let usersService = { create: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST users/create`, () => {
    return request(app.getHttpServer())
      .get('notes/create')
      .expect(200)
      .expect({
        data: usersService.create(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});


describe('User', () => {
  let app: INestApplication;
  let usersService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET /users/:username/notes`, () => {
    return request(app.getHttpServer())
      .get('/users/:username/notes')
      .expect(200)
      .expect({
        data: usersService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});