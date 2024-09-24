import { Detail } from "../pages/details/utils";
import { apiToken } from "./config";

const moviesDetails = async (path: string): Promise<Detail> => {
  const requestUrl = `https://api.themoviedb.org/3/${path}`;

  const headers = {
    Authorization: `Bearer ${apiToken}`,
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

    return data;
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    throw error;
  }
};

export { moviesDetails };
