"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferencesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserPreferencesService = class UserPreferencesService {
    constructor(preferenceModel) {
        this.preferenceModel = preferenceModel;
    }
    async create(createPreferenceDto) {
        return this.preferenceModel.create(createPreferenceDto);
    }
    async findOne(userId) {
        let preference = this.preferenceModel.findOne({ userId });
        if (!preference) {
            throw new common_1.NotFoundException('User preference not found');
        }
        return preference;
    }
    async update(userId, updatePreferenceDto) {
        let updatedPreference = this.preferenceModel.findOneAndUpdate({ userId }, updatePreferenceDto, { new: true });
        if (!updatedPreference) {
            throw new common_1.NotFoundException('User preference not found');
        }
        return updatedPreference;
    }
    async delete(userId) {
        const deletedUserPreference = await this.preferenceModel.findOneAndDelete({ userId });
        if (!deletedUserPreference) {
            throw new common_1.NotFoundException(`User preference with ID ${userId} not found.`);
        }
        return {
            message: `User Preference have been successfully deleted.`,
        };
    }
};
exports.UserPreferencesService = UserPreferencesService;
exports.UserPreferencesService = UserPreferencesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('UserPreference')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserPreferencesService);
//# sourceMappingURL=user-preferences.service.js.map