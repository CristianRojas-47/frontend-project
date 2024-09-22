import { Movie } from "../pages/home/utils";

const moviesRequest = async (path: string): Promise<Movie[]> => {
  const requestUrl = `https://api.themoviedb.org/3/${path}`;

  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTZmNzQwNTAzMWIyZGJlYTUxNzU1OWJiMjFmOGE4ZiIsInN1YiI6IjYxZWFlYzViZWEzN2UwMDAxYjc1Y2FlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jPsGYLGHLNKC5y1lyHx4-siA6-XVO9O3Iku6W_oax60",
    "Content-Type": "application/json;charset=utf-8",
  };

  try {
    const response = await fetch(requestUrl, { headers });

    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    throw error;
  }
};

export { moviesRequest };
