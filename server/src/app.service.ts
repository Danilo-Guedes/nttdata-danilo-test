import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetMoviesDTO } from 'dtos/getMovies.dto';
import { GetMovieDetailsDTO } from 'dtos/getMoviesDetails.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World new!';
  }

  async getMovies(search: string): Promise<GetMoviesDTO[]> {
    const secretKey = process.env.OMDB_API_KEY;
    const apiUrl = `http://www.omdbapi.com/?apikey=${secretKey}&s=${search}`;

    try {
      const response = await axios.get<GetMoviesDTO[]>(apiUrl);

      const data = response.data;
      return data;
    } catch (error) {
      // Handle error
      console.error('Error fetching movies:', error);
      throw error;
    }
  }

  async getMovieDetails(movieId: string): Promise<GetMovieDetailsDTO> {
    const secretKey = process.env.OMDB_API_KEY;
    const apiUrl = `http://www.omdbapi.com/?apikey=${secretKey}&i=${movieId}`;

    try {
      const response = await axios.get<GetMovieDetailsDTO>(apiUrl);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
