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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePreferenceDto = exports.CreatePreferenceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePreferenceDto {
}
exports.CreatePreferenceDto = CreatePreferenceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique ID of the user' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreferenceDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email of the user' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePreferenceDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Preferences for notifications',
        example: {
            marketing: true,
            newsletter: false,
            updates: true,
            frequency: 'weekly',
            channels: { email: true, sms: false, push: true },
        },
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreatePreferenceDto.prototype, "preferences", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timezone of the user', example: 'America/New_York' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreferenceDto.prototype, "timezone", void 0);
class UpdatePreferenceDto {
}
exports.UpdatePreferenceDto = UpdatePreferenceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email of the user', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdatePreferenceDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Preferences for notifications',
        required: false,
        example: {
            marketing: true,
            newsletter: false,
            updates: true,
            frequency: 'weekly',
            channels: { email: true, sms: false, push: true },
        },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdatePreferenceDto.prototype, "preferences", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timezone of the user', required: false, example: 'America/New_York' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePreferenceDto.prototype, "timezone", void 0);
//# sourceMappingURL=user-preferences.dto.js.map