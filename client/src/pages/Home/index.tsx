import { useQuery } from "@tanstack/react-query";
import PageLayout from "../../components/PageLayout";
import { getMoviesApi } from "../../api/movies";

function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies-list"],
    queryFn: getMoviesApi,
  });
  return (
    <PageLayout>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </PageLayout>
  );
}

export default Home;
