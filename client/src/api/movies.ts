import apiClient from ".";

export async function getMoviesApi(searchText: string) {

  console.log({searchText});
  try {
    const resp = await apiClient.get("/movies", {
      params: {
        search : searchText,
      },
    
    });

    if(!resp.data) {
      throw new Error("No data found");
    }

    return resp.data;
    
  } catch (error) {
    console.log(error);
  }
}
