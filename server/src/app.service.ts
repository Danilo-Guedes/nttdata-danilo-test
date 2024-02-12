import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World new!';
  }

  async getMovies(): Promise<string> {
    const secretKey = process.env.OMDB_API_KEY;
    const apiUrl = 'http://www.omdbapi.com/?apikey=' + secretKey + '&t=batman';

    try {
      const response = await axios.get(apiUrl);
      const movies = response.data;

      console.log('Movies:', movies)
      // Process the movies data as needed
      return JSON.stringify(movies);
    } catch (error) {
      // Handle error
      console.error('Error fetching movies:', error);
      return 'Error fetching movies';
    }
  }
}
