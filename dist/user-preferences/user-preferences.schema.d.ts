import { Schema } from "mongoose";
export declare const UserPreference: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    userId: string;
    email: string;
    createdAt: NativeDate;
    timezone: string;
    lastUpdated: NativeDate;
    preferences?: {
        marketing: boolean;
        newsletter: boolean;
        updates: boolean;
        frequency: "daily" | "weekly" | "monthly" | "never";
        channels?: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    userId: string;
    email: string;
    createdAt: NativeDate;
    timezone: string;
    lastUpdated: NativeDate;
    preferences?: {
        marketing: boolean;
        newsletter: boolean;
        updates: boolean;
        frequency: "daily" | "weekly" | "monthly" | "never";
        channels?: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
}>> & import("mongoose").FlatRecord<{
    userId: string;
    email: string;
    createdAt: NativeDate;
    timezone: string;
    lastUpdated: NativeDate;
    preferences?: {
        marketing: boolean;
        newsletter: boolean;
        updates: boolean;
        frequency: "daily" | "weekly" | "monthly" | "never";
        channels?: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
