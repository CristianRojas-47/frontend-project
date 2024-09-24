import { Movie } from "../pages/home/utils";
import { apiToken } from "./config";

// Function to request movies from the MovieDB API
// Takes a `path` as an argument to build the request URL
// Returns a Promise that resolves to an array of Movie objects
const moviesRequest = async (path: string): Promise<Movie[]> => {
  const requestUrl = `https://api.themoviedb.org/3/${path}`;

  // Set up headers with authorization token and content type
  const headers = {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json;charset=utf-8",
  };

  try {
    // Fetch data from the API using the built URL and headers
    const response = await fetch(requestUrl, { headers });

    // Throw an error if the response is not successful
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    // Parse and return the JSON response containing the movie data
    const data = await response.json();
    return data.results;
  } catch (error) {
    // Log the error and rethrow it for higher-level handling
    console.error("Error al obtener las películas:", error);
    throw error;
  }
};

export { moviesRequest };
