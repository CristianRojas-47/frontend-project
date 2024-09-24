// Import styled components and necessary icons for the registration form
import {
  StyledbuttonB,
  StyledCard,
  StyledContainer,
  StyledContainerInput,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./styles";
import { MdAccountCircle } from "react-icons/md";

// Registration component renders a user registration form
function Registration() {
  return (
    <>
      <StyledContainer>
        <StyledCard>
          <MdAccountCircle size="140px" color="#212f3c" />
          <StyledForm>
            <StyledContainerInput>
              <StyledLabel htmlFor="fullName">Nombre</StyledLabel>
              <StyledInput type="text" id="fullName" name="fullName" required />
            </StyledContainerInput>
            <StyledContainerInput>
              <StyledLabel htmlFor="email">Correo Electrónico</StyledLabel>
              <StyledInput type="email" id="email" name="email" required />
            </StyledContainerInput>
            <StyledContainerInput>
              <StyledLabel htmlFor="password">Contraseña</StyledLabel>
              <StyledInput
                type="password"
                id="password"
                name="password"
                required
              />
            </StyledContainerInput>
            <StyledContainerInput>
              <StyledLabel htmlFor="confirmPassword">
                Confirm Password
              </StyledLabel>
              <StyledInput
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
            </StyledContainerInput>
          </StyledForm>
          <StyledbuttonB type="submit">Registrarse</StyledbuttonB>
        </StyledCard>
      </StyledContainer>
    </>
  );
}

export { Registration };
