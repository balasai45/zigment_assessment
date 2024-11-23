import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreatePreferenceDto } from '../src/user-preferences/dto/user-preferences.dto';


describe('CreatePreferenceDto', () => {
  it('should fail validation if email is invalid', async () => {
    const dto = plainToClass(CreatePreferenceDto, {
      userId: 'user123',
      email: 'invalid-email',
      preferences: {
        marketing: true,
        newsletter: false,
        updates: true,
        frequency: 'weekly',
        channels: {
          email: true,
          sms: false,
          push: true,
        },
      },
      timezone: 'America/New_York',
    });
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('email');
  });
});
