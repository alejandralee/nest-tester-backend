import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from './entity/User';

@Injectable()
export class AppService {
  constructor(private readonly manager: EntityManager) {}

  getHello(): string {
    return 'Hello World! This is me testing a deploy!';
  }

  getCurrentTime(): string {
    // get the current time in UTC and format it as a string
    const now = new Date();
    return now.toUTCString();
  }

  addUser(firstName: string): Promise<any> {
    const user = this.manager.create(User, { firstName });
    return this.manager.save(user);
  }
}
