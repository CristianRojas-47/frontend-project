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
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../../useAuth";

function Login() {
  const { login } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate("/"); 
  };

  return (
    <StyledContainer>
      <StyledContainerSection>
        <StyledTitle>
          Encuentra la información de tus películas favoritas.
        </StyledTitle>
        <StyledImg src={watchingTv} alt="woman-watching-tv" />
      </StyledContainerSection>
      <StyledCard>
        <MdMovieFilter size="140px" color="#212f3c" />
        <StyledForm onSubmit={handleLogin}>
          <StyledContainerInput>
            <StyledLabel htmlFor="email">Correo electrónico</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </StyledContainerInput>
          <StyledContainerInput>
            <StyledLabel htmlFor="password">Contraseña</StyledLabel>
            <StyledInput
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StyledContainerInput>
          <StyledContainerButtons>
            <StyledbuttonB type="submit">Iniciar Sesión</StyledbuttonB>
            <StyledbuttonA type="reset">Registrarse</StyledbuttonA>
          </StyledContainerButtons>
        </StyledForm>
      </StyledCard>
    </StyledContainer>
  );
}

export { Login };
