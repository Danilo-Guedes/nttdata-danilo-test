import { useParams } from "react-router-dom"
import { getMovieDetails } from "../../api/movies";
import { useQuery } from "@tanstack/react-query";


function MovieDetails() {
    const { movieId } = useParams();


    console.log({movieId});
    const {data, isLoading, isError, isSuccess} = useQuery({
        queryKey: ["movie-details", movieId],
        queryFn: async () => {
            return await getMovieDetails(movieId);
        },
    })
  return (
    <pre>{JSON.stringify(data,null,4)}</pre>
  )
}

export default MovieDetails