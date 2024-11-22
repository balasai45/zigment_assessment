import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserPreferencesService } from './user-preferences.service';
import { CreatePreferenceDto, UpdatePreferenceDto } from './dto/user-preferences.dto';

@Controller('api/preferences')
export class UserPreferencesController {
  constructor(private readonly preferencesService: UserPreferencesService) {}

  @Post()
  async create(@Body() createPreferenceDto: CreatePreferenceDto) {
    return this.preferencesService.create(createPreferenceDto);
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string) {
    return this.preferencesService.findOne(userId);
  }

  @Patch(':userId')
  async update(
    @Param('userId') userId: string,
    @Body() updatePreferenceDto: UpdatePreferenceDto,
  ) {
    return this.preferencesService.update(userId, updatePreferenceDto);
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: string) {
    return this.preferencesService.delete(userId);
  }
}

