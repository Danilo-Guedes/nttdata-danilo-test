import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetMoviesDTO } from 'dtos/getMovies.dto';
import { GetMovieDetailsDTO } from 'dtos/getMoviesDetails.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/movies')
  getMovies(@Query('search') search: string): Promise<GetMoviesDTO[]> {
    return this.appService.getMovies(search);
  }

  @Get('/movies/:movieId')
  getMovieDetails(
    @Param('movieId') movieId: string,
  ): Promise<GetMovieDetailsDTO> {
    return this.appService.getMovieDetails(movieId);
  }
}
