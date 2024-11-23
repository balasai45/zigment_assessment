import { NotificationsService } from './notifications.service';
import { SendNotificationDto } from './dto/notifications.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    send(sendNotificationDto: SendNotificationDto): Promise<{
        success: boolean;
        status: "sent" | "failed";
        log: import("mongoose").Document<unknown, {}, import("./notifications.schema").NotificationLog> & import("./notifications.schema").NotificationLog & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    getLogs(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./notifications.schema").NotificationLog> & import("./notifications.schema").NotificationLog & Required<{
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
}
