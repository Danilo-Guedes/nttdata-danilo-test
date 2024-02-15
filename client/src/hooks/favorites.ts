import { useState } from 'react';

import { MovieDetails } from '../types/movies';

const useMovieStorage = (): {
    movies: MovieDetails[];
    addMovie: (movie: MovieDetails) => void;
    removeMovie: (id: string) => void;
} => {
    const [movies, setMovies] = useState<MovieDetails[]>(() => {
        const storedMovies = localStorage.getItem('ntt-favorite-movies');
        return storedMovies ? JSON.parse(storedMovies) : [];
    });

    const addMovie = (movie: MovieDetails) => {
        const updatedMovies = [...movies, movie];
        setMovies(updatedMovies);
        localStorage.setItem('ntt-favorite-movies', JSON.stringify(updatedMovies));
    };

    const removeMovie = (id: string) => {
        const updatedMovies = movies.filter((movie) => movie.imdbID !== id);
        setMovies(updatedMovies);
        localStorage.setItem('ntt-favorite-movies', JSON.stringify(updatedMovies));
    };

    return { movies, addMovie, removeMovie };
};

export default useMovieStorage;