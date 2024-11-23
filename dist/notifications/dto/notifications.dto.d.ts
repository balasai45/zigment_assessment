export declare class SendNotificationDto {
    userId: string;
    type: 'marketing' | 'newsletter' | 'updates';
    channel: 'email' | 'sms' | 'push';
    content: {
        subject: string;
        body: string;
    };
}
