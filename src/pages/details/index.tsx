import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesDetails } from "../../service/movieDetails";
import { Detail } from "./utils";
import {
  StyledContainer,
  StyledDescription,
  StyledImg,
  StyledOption,
  StyledSection,
  StyledTitle,
  StyledTitleDescription,
} from "./styles";

function Details() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Detail>();

  useEffect(() => {
    moviesDetails("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <StyledContainer>
      <StyledImg src={imageUrl} alt={movie.title} />
      <StyledSection>
        <StyledTitle>{movie.title}</StyledTitle>
        <StyledOption>
          <StyledTitleDescription>Description:</StyledTitleDescription>
          <StyledDescription>{movie.overview}</StyledDescription>
        </StyledOption>
        <StyledOption>
          <StyledTitleDescription>Genres:</StyledTitleDescription>{" "}
          <StyledDescription>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </StyledDescription>
        </StyledOption>
        <StyledOption>
          <StyledTitleDescription>Popularity:</StyledTitleDescription>{" "}
          <StyledDescription>{movie.popularity}</StyledDescription>
        </StyledOption>
      </StyledSection>
    </StyledContainer>
  );
}

export { Details };
