import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SendNotificationDto } from './dto/notifications.dto';


@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  
  @Post('send')
  async send(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationsService.send(sendNotificationDto);
  }

  @Get(':userId/logs')
  async getLogs(@Param('userId') userId: string) {
    return this.notificationsService.getLogs(userId);
  }

  @Get('stats')
  async getStats() {
    return this.notificationsService.getStats();
  }
}
