import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('Rate Limiting (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should allow up to the limit of requests', async () => {
    const payload = {
      userId: 'user123',
      type: 'marketing',
      channel: 'email',
      content: { subject: 'Test', body: 'Message' },
    };

      const response = await request(app.getHttpServer())
        .post('/api/notifications/send')
        .send(payload)
        .expect(201);

      expect(response.body.success).toBe(true);
    
  });

});
