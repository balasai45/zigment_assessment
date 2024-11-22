import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesController } from './user-preferences.controller';
import { UserPreferencesService } from './user-preferences.service';
import { UserPreference } from './user-preferences.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserPreference', schema: UserPreference}]),
  ],
  controllers: [UserPreferencesController],
  providers: [UserPreferencesService]
})
export class UserPreferencesModule {}
