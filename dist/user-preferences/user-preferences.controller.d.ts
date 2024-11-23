import { UserPreferencesService } from './user-preferences.service';
import { CreatePreferenceDto, UpdatePreferenceDto } from './dto/user-preferences.dto';
export declare class UserPreferencesController {
    private readonly preferencesService;
    constructor(preferencesService: UserPreferencesService);
    create(createPreferenceDto: CreatePreferenceDto): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/user-preferences.interface").UserPreference> & import("./interfaces/user-preferences.interface").UserPreference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findOne(userId: string): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/user-preferences.interface").UserPreference> & import("./interfaces/user-preferences.interface").UserPreference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(userId: string, updatePreferenceDto: UpdatePreferenceDto): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/user-preferences.interface").UserPreference> & import("./interfaces/user-preferences.interface").UserPreference & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    delete(userId: string): Promise<{
        message: string;
    }>;
}
