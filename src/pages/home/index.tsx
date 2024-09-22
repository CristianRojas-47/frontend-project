import { useEffect, useState } from "react";
import { moviesRequest } from "../../service/request";
import { Movie } from "./utils";
import {
  StyledImg,
  StyledLi,
  StyledUl,
  StyledLink,
  StyledName,
} from "./styles";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    moviesRequest("discover/movie").then((data) => {
      setMovies(data);
    });
  }, []);

  return (
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
