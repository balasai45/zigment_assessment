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
exports.SendNotificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SendNotificationDto {
}
exports.SendNotificationDto = SendNotificationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID to send the notification to' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendNotificationDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of notification', enum: ['marketing', 'newsletter', 'updates'] }),
    (0, class_validator_1.IsEnum)(['marketing', 'newsletter', 'updates']),
    __metadata("design:type", String)
], SendNotificationDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel to use for sending notification', enum: ['email', 'sms', 'push'] }),
    (0, class_validator_1.IsEnum)(['email', 'sms', 'push']),
    __metadata("design:type", String)
], SendNotificationDto.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Content of the notification',
        example: {
            subject: 'Special Offer',
            body: 'Check out our latest deals!',
        },
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], SendNotificationDto.prototype, "content", void 0);
//# sourceMappingURL=notifications.dto.js.map