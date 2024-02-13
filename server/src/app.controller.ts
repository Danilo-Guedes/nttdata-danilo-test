import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/movies')
  getMovies(@Query('search') search: string): Promise<string> {
    console.log({ search });

    return this.appService.getMovies(search);
  }
}
