"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreference = void 0;
const mongoose_1 = require("mongoose");
exports.UserPreference = new mongoose_1.Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true },
    preferences: {
        marketing: { type: Boolean, default: false },
        newsletter: { type: Boolean, default: false },
        updates: { type: Boolean, default: true },
        frequency: { type: String, enum: ['daily', 'weekly', 'monthly', 'never'], default: 'weekly' },
        channels: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: false },
            push: { type: Boolean, default: false },
        },
    },
    timezone: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=user-preferences.schema.js.map