import { validate } from 'class-validator';
import { SendNotificationDto } from './dto/notifications.dto'

describe('SendNotificationDto', () => {
  it('should validate a correct DTO', async () => {
    const dto = new SendNotificationDto();
    dto.userId = 'user123';
    dto.type = 'marketing';
    dto.channel = 'email';
    dto.content = { subject: 'Hello', body: 'World' };

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail for missing fields', async () => {
    const dto = new SendNotificationDto(); // Missing fields

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
