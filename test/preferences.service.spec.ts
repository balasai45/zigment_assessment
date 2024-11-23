import { Test, TestingModule } from '@nestjs/testing';
import { UserPreferencesService } from '../src/user-preferences/user-preferences.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from '../src/user-preferences/interfaces/user-preferences.interface';

describe('UserPreferencesService', () => {
  let service: UserPreferencesService;
  let model: Model<UserPreference>;

  const mockUserPreference = {
    userId: 'user123',
    email: 'user@example.com',
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
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserPreferencesService,
        {
          provide: getModelToken('UserPreference'),
          useValue: {
            findOne: jest.fn().mockResolvedValue(mockUserPreference),
            save: jest.fn().mockResolvedValue(mockUserPreference),
            findOneAndUpdate: jest.fn().mockImplementation((filter, updateData) => {
              return {
                ...mockUserPreference,
                preferences: {
                  ...mockUserPreference.preferences,
                  ...updateData.preferences,
                },
              };
            }),
            deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }), // Ensure this returns correctly
          },
          
        },
      ],
    }).compile();

    service = module.get<UserPreferencesService>(UserPreferencesService);
    model = module.get<Model<UserPreference>>(getModelToken('UserPreference'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a user preference by userId', async () => {
    const result = await service.findOne('user123');
    expect(result).toEqual(mockUserPreference);
  });

  it('should update a user preference', async () => {
    const updatedPreference = await service.update('user123', {
      preferences: {
        marketing: false,
        newsletter: true,
        updates: true,
        frequency: 'weekly',
        channels: {
          email: true,
          sms: false,
          push: true,
        },
      },
    });
    expect(updatedPreference.preferences.marketing).toBe(false);
  });
  


it('should delete a user preference', async () => {
    const result = await service.delete('user123');
    expect(result).toEqual({
      message: `User Preference have been successfully deleted.`,
  });
  });
  
});
