import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/current-time')
  getCurrentTime(): string {
    return this.appService.getCurrentTime();
  }

  // prompt: create add user that will take name in the post body and save user to db
  @Post('/user')
  async addUser(@Body('firstName') firstName: string): Promise<any> {
    return this.appService.addUser(firstName);
  }
}
