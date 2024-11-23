import { Injectable, NotFoundException } from '@nestjs/common';
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
    let preference=this.preferenceModel.findOne({ userId });
    if (!preference) {
      throw new NotFoundException('User preference not found');
    }
    return preference
  }

  async update(userId: string, updatePreferenceDto: UpdatePreferenceDto) {
    let updatedPreference= this.preferenceModel.findOneAndUpdate(
      { userId },
      updatePreferenceDto,
      { new: true },
    );
    if (!updatedPreference) {
      throw new NotFoundException('User preference not found');
    }
    return updatedPreference
  }

  async delete(userId: string) {
    let res= this.preferenceModel.deleteOne({ userId });
    if ((await res).deletedCount===0){
      throw new NotFoundException('User preference not found');
    }
    return res;
  }
}
