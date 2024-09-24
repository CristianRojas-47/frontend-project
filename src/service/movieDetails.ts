import { Detail } from "../pages/details/utils";
import { apiToken } from "./config";

// Function to fetch movie details from the MovieDB API
// Takes a `path` as an argument to construct the request URL
// Returns a Promise that resolves to a Detail object
const moviesDetails = async (path: string): Promise<Detail> => {
  const requestUrl = `https://api.themoviedb.org/3/${path}`;

  // Define headers for the request, including the API token for authentication
  const headers = {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json;charset=utf-8",
  };

  try {
    // Fetch data from the API using the request URL and headers
    const response = await fetch(requestUrl, { headers });

    // Throw an error if the response is unsuccessful
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    // Parse and return the JSON response containing movie details
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error to the console and rethrow it for further handling
    console.error("Error al obtener las películas:", error);
    throw error;
  }
};

export { moviesDetails };
