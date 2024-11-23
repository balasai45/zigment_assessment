import { Model } from 'mongoose';
import { SendNotificationDto } from './dto/notifications.dto';
import { NotificationLog } from './notifications.schema';
export declare class NotificationsService {
    private readonly notificationLogModel;
    constructor(notificationLogModel: Model<NotificationLog>);
    send(sendNotificationDto: SendNotificationDto): Promise<{
        success: boolean;
        status: "sent" | "failed";
        log: import("mongoose").Document<unknown, {}, NotificationLog> & NotificationLog & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    getLogs(userId: string): Promise<(import("mongoose").Document<unknown, {}, NotificationLog> & NotificationLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getStats(): Promise<{
        totalNotifications: number;
        sent: number;
        failed: number;
        pending: number;
    }>;
    private simulateNotification;
}
