import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is me testing a deploy!';
  }

  getCurrentTime(): string {
    // get the current time in UTC and format it as a string
    const now = new Date();
    return now.toUTCString();
  }
}
