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
exports.UserPreferencesController = void 0;
const common_1 = require("@nestjs/common");
const user_preferences_service_1 = require("./user-preferences.service");
const user_preferences_dto_1 = require("./dto/user-preferences.dto");
let UserPreferencesController = class UserPreferencesController {
    constructor(preferencesService) {
        this.preferencesService = preferencesService;
    }
    async create(createPreferenceDto) {
        return this.preferencesService.create(createPreferenceDto);
    }
    async findOne(userId) {
        return this.preferencesService.findOne(userId);
    }
    async update(userId, updatePreferenceDto) {
        return this.preferencesService.update(userId, updatePreferenceDto);
    }
    async delete(userId) {
        return this.preferencesService.delete(userId);
    }
};
exports.UserPreferencesController = UserPreferencesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_preferences_dto_1.CreatePreferenceDto]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_preferences_dto_1.UpdatePreferenceDto]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "delete", null);
exports.UserPreferencesController = UserPreferencesController = __decorate([
    (0, common_1.Controller)('api/preferences'),
    __metadata("design:paramtypes", [user_preferences_service_1.UserPreferencesService])
], UserPreferencesController);
//# sourceMappingURL=user-preferences.controller.js.map