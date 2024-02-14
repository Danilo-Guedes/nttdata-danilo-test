import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World new!';
  }

  async getMovies(search: string): Promise<string> {
    console.log({ search });
    const secretKey = process.env.OMDB_API_KEY;
    const apiUrl = `http://www.omdbapi.com/?apikey=${secretKey}&s=${search}`;

    console.log({
      apiUrl,
    });

    try {
      const response = await axios.get(apiUrl);


      const data = response.data;

      console.log('Data:', data);
      // Process the movies data as needed
      return data;
    } catch (error) {
      // Handle error
      console.error('Error fetching movies:', error);
      return 'Error fetching movies';
    }
  }
}
