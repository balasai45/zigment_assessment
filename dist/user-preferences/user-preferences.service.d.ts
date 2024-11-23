import { Model } from 'mongoose';
import { UserPreference } from './interfaces/user-preferences.interface';
import { CreatePreferenceDto, UpdatePreferenceDto } from './dto/user-preferences.dto';
export declare class UserPreferencesService {
    private readonly preferenceModel;
    constructor(preferenceModel: Model<UserPreference>);
    create(createPreferenceDto: CreatePreferenceDto): Promise<import("mongoose").Document<unknown, {}, UserPreference> & UserPreference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findOne(userId: string): Promise<import("mongoose").Document<unknown, {}, UserPreference> & UserPreference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(userId: string, updatePreferenceDto: UpdatePreferenceDto): Promise<import("mongoose").Document<unknown, {}, UserPreference> & UserPreference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    delete(userId: string): Promise<{
        message: string;
    }>;
}
