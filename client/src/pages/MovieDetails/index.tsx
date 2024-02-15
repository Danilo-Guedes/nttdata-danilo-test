import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/movies";
import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../types/movies";

import PageLayout from "../../components/PageLayout";
import MovieDetailsView from "./components/MovieDetailsView";

function MovieDetailsPage() {
  const { movieId } = useParams();

  console.log({ movieId });
  const {
    data: movie,
    isLoading,
    isError,
    isSuccess,
  } = useQuery<MovieDetails>({
    queryKey: ["movie-details", movieId],
    queryFn: async () => {
      return await getMovieDetails(movieId);
    },
    
  });


  return (
    <PageLayout>
      <div>
        {isLoading && <div>Loading...</div>}
        {isError &&  <div>Error</div>}
        {isSuccess && (
          <MovieDetailsView  movie={movie} />
        )}
      </div>
    </PageLayout>
  );
}

export default MovieDetailsPage;
