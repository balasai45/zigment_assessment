import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsObject, IsOptional, IsString } from 'class-validator';

export class CreatePreferenceDto {
  @ApiProperty({ description: 'Unique ID of the user' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Preferences for notifications',
    example: {
      marketing: true,
      newsletter: false,
      updates: true,
      frequency: 'weekly',
      channels: { email: true, sms: false, push: true },
    },
  })
  @IsObject()
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: { email: boolean; sms: boolean; push: boolean };
  };

  @ApiProperty({ description: 'Timezone of the user', example: 'America/New_York' })
  @IsString()
  timezone: string;
}

export class UpdatePreferenceDto {
  @ApiProperty({ description: 'Email of the user', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Preferences for notifications',
    required: false,
    example: {
      marketing: true,
      newsletter: false,
      updates: true,
      frequency: 'weekly',
      channels: { email: true, sms: false, push: true },
    },
  })
  @IsOptional()
  @IsObject()
  preferences?: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: { email: boolean; sms: boolean; push: boolean };
  };

  @ApiProperty({ description: 'Timezone of the user', required: false, example: 'America/New_York' })
  @IsOptional()
  @IsString()
  timezone?: string;
}
