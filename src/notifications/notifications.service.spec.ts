import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { getModelToken } from '@nestjs/mongoose';
import { NotificationLog } from './notifications.schema';
import { Model } from 'mongoose';

const mockNotificationLogModel = {
  create: jest.fn().mockImplementation((dto) => ({
    ...dto,
    status: 'pending',
    save: jest.fn().mockResolvedValue({
      ...dto,
      status: 'sent',
      sentAt: new Date(),
    }),
  })),
  countDocuments: jest.fn(),
};

describe('NotificationsService', () => {
  let service: NotificationsService;
  let model: Model<NotificationLog>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        {
          provide: getModelToken(NotificationLog.name),
          useValue: mockNotificationLogModel,
        },
      ],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
    model = module.get<Model<NotificationLog>>(getModelToken(NotificationLog.name));
  });

  describe('send', () => {
    it('should log a notification as sent', async () => {
      const mockDto = {
        userId: 'user123',
        type: 'marketing',
        channel: 'email',
        content: { subject: 'Test Subject', body: 'Test Body' },
      };

      const result = await service.send(mockDto);

      expect(result.log.status).toBe('sent');
      expect(mockNotificationLogModel.create).toHaveBeenCalledWith({
        userId: mockDto.userId,
        type: mockDto.type,
        channel: mockDto.channel,
        status: 'pending',
        metadata: mockDto.content,
      });
    });
  });
  describe('getStats', () => {
    it('should return statistics', async () => {
      mockNotificationLogModel.countDocuments.mockResolvedValueOnce(10); // Sent
      mockNotificationLogModel.countDocuments.mockResolvedValueOnce(5);  // Failed
      mockNotificationLogModel.countDocuments.mockResolvedValueOnce(2);  // Pending

      const stats = await service.getStats();

      expect(stats).toEqual({
        totalNotifications: 17,
        sent: 10,
        failed: 5,
        pending: 2,
      });
    });
  });
});

