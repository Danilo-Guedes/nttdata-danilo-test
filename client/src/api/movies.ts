import apiClient from ".";

export async function getMoviesApi(searchText: string) {
  try {
    const resp = await apiClient.get("/movies", {
      params: {
        search: searchText,
      },
    });

    if (!resp.data) {
      throw new Error("No data found");
    }

    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(movieId: string | undefined) {
  if (!movieId) {
    throw new Error("No movieId provided");
  }
  try {
    const resp = await apiClient.get(`/movies/${movieId}`);

    if (!resp.data || resp.data.Response === "False") {
      throw new Error("No data found");
    }

    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
