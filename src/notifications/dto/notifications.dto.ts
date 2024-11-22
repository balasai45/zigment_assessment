import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsObject, IsString } from 'class-validator';

export class SendNotificationDto {
  @ApiProperty({ description: 'User ID to send the notification to' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Type of notification', enum: ['marketing', 'newsletter', 'updates'] })
  // @IsEnum(['marketing', 'newsletter', 'updates'])
  @IsString()
  type: string;
  // type: 'marketing' | 'newsletter' | 'updates';

  @ApiProperty({ description: 'Channel to use for sending notification', enum: ['email', 'sms', 'push'] })
  // @IsEnum(['email', 'sms', 'push'])
  @IsString()
  channel: string;
  // channel: 'email' | 'sms' | 'push';

  @ApiProperty({
    description: 'Content of the notification',
    example: {
      subject: 'Special Offer',
      body: 'Check out our latest deals!',
    },
  })
  @IsObject()
  content: {
    subject: string;
    body: string;
  };
}


