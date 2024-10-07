// Import styled components and necessary icons for the login form
import watchingTv from "../../assets/watchingTv.jpg";
import {
  StyledbuttonA,
  StyledbuttonB,
  StyledCard,
  StyledContainer,
  StyledContainerButtons,
  StyledContainerInput,
  StyledContainerSection,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledLabel,
  StyledTitle,
} from "./styles";
import { MdMovieFilter } from "react-icons/md";

// Login component renders a user login form
function Login() {
  return (
    <>
      <StyledContainer>
        <StyledContainerSection>
          <StyledTitle>
            Encuenta la información de tus películas favoritas.
          </StyledTitle>
          <StyledImg src={watchingTv} alt="woman-watching-tv" />
        </StyledContainerSection>
        <StyledCard>
          <MdMovieFilter size="140px"color="#212f3c" />
          <StyledForm>
            <StyledContainerInput>
              <StyledLabel htmlFor="fullName">Correo electrónico</StyledLabel>
              <StyledInput type="email" id="email" name="email" required />
            </StyledContainerInput>
            <StyledContainerInput>
              <StyledLabel htmlFor="fullName">Contraseña</StyledLabel>
              <StyledInput type="password" id="password" name="password" required />
            </StyledContainerInput>
          </StyledForm>
          <StyledContainerButtons>
            <StyledbuttonB type="submit">Iniciar Sesión</StyledbuttonB>
            <StyledbuttonA type="reset">Registrarse</StyledbuttonA>
          </StyledContainerButtons>
        </StyledCard>
      </StyledContainer>
    </>
  );
}

export { Login };
