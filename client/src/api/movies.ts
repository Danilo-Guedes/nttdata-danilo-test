import apiClient from ".";

export async function getMoviesApi() {
  try {
    const resp = await apiClient.get("/movies");

    if(!resp.data) {
      throw new Error("No data found");
    }

    return resp.data;
    
  } catch (error) {
    console.log(error);
  }
}
