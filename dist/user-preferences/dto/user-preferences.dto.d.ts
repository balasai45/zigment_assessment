export declare class CreatePreferenceDto {
    userId: string;
    email: string;
    preferences: {
        marketing: boolean;
        newsletter: boolean;
        updates: boolean;
        frequency: 'daily' | 'weekly' | 'monthly' | 'never';
        channels: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
    timezone: string;
}
export declare class UpdatePreferenceDto {
    email?: string;
    preferences?: {
        marketing: boolean;
        newsletter: boolean;
        updates: boolean;
        frequency: 'daily' | 'weekly' | 'monthly' | 'never';
        channels: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
    timezone?: string;
}
