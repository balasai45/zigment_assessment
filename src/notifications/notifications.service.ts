import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SendNotificationDto } from './dto/notifications.dto';
import { NotificationLog } from './notifications.schema';
@Injectable()
export class NotificationsService {
  constructor( 
    @InjectModel('NotificationLog') private readonly notificationLogModel: Model<NotificationLog>
  ){
  }
  async send(sendNotificationDto: SendNotificationDto) {
    const { userId, type, channel, content } = sendNotificationDto;

    if (!userId || !type || !channel || !content) {
      throw new BadRequestException('Missing required fields in request.');
    }
  
    const notificationLog = await this.notificationLogModel.create({
      userId,
      type,
      channel,
      status: 'pending',
      metadata: content,
    });
  
    const simulatedResult = this.simulateNotification();
  
    if (simulatedResult.success) {
      notificationLog.status = 'sent';
      notificationLog.sentAt = new Date();
    } else {
      notificationLog.status = 'failed';
      notificationLog.failureReason = simulatedResult.reason;
    }
  
    await notificationLog.save();
  
    return {
      success: simulatedResult.success,
      status: notificationLog.status,
      log: notificationLog,
    };
  }

  async getLogs(userId: string) {
    const logCount = await this.notificationLogModel.countDocuments({ userId });
    if (logCount === 0) {
      throw new NotFoundException('Notification Log not found');
    }

    const logs = await this.notificationLogModel.find({ userId });
    return logs;
  }

  async getStats() {
    const sentCount = await this.notificationLogModel.countDocuments({ status: 'sent' });
    const failedCount = await this.notificationLogModel.countDocuments({ status: 'failed' });
    const pendingCount = await this.notificationLogModel.countDocuments({ status: 'pending' });
    const totalNotifications = sentCount + failedCount + pendingCount;
  
    return {
      totalNotifications,
      sent: sentCount,
      failed: failedCount,
      pending: pendingCount,
    }; 
  }
  private simulateNotification() {
    const success = Math.random() > 0.2; 
    const reason = success ? null : 'Simulated delivery failure';
    return { success, reason };
  }
}



