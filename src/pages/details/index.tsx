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

// Details component fetches and displays detailed information for a specific movie
function Details() {
  // Extract movieId from the URL parameters
  const { movieId } = useParams();
  // State to store the movie details
  const [movie, setMovie] = useState<Detail>();

  // Fetch the movie details when the component mounts or when movieId changes
  useEffect(() => {
    moviesDetails("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  // If movie details are not available, return null to avoid rendering
  if (!movie) {
    return null;
  }

  // Construct the image URL for the movie poster
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    // Render movie details including title, description, genres, and popularity
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
