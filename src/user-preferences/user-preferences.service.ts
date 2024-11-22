import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './interfaces/user-preferences.interface';
import { CreatePreferenceDto, UpdatePreferenceDto } from './dto/user-preferences.dto';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel('UserPreference' )
    private readonly preferenceModel: Model<UserPreference>,
  ) {}

  async create(createPreferenceDto: CreatePreferenceDto) {
    return this.preferenceModel.create(createPreferenceDto);
  }

  async findOne(userId: string) {
    return this.preferenceModel.findOne({ userId });
  }

  async update(userId: string, updatePreferenceDto: UpdatePreferenceDto) {
    return this.preferenceModel.findOneAndUpdate(
      { userId },
      updatePreferenceDto,
      { new: true },
    );
  }

  async delete(userId: string) {
    return this.preferenceModel.deleteOne({ userId });
  }
}
