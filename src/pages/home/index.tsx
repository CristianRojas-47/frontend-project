import { useEffect, useState } from "react";
import { moviesRequest } from "../../service/moviesRequest";
import {
  StyledImg,
  StyledLi,
  StyledLink,
  StyledName,
  StyledUl,
} from "./styles";
import { Movie } from "./utils";

// Home component displays a list of movies fetched from the MovieDB API
function Home() {
  // State to store the list of movies
  const [movies, setMovies] = useState<Movie[]>([]);

  // Fetch movies when the component mounts and update the state
  useEffect(() => {
    moviesRequest("discover/movie").then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    // Render a list of movies with links to their detail pages
    <StyledUl>
      {movies.map((movie) => (
        <StyledLi key={movie.id}>
          <StyledLink to={"/movies/" + movie.id}>
            <StyledImg
              src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
              alt={movie.title}
            />
            <StyledName>{movie.title}</StyledName>
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
}

export { Home };
