import {
  StyledContainer,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledRow,
  StyledTextarea,
  StyledbuttonA,
  StyledContainerButtons,
  StyledbuttonB,
} from "./styles";

function Contact() {
  return (
    <StyledContainer>
      <StyledTitle>Contacto</StyledTitle>
      <StyledForm>
        <StyledRow>
          <StyledInput
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Nombres y Apellidos*"
            required
          />
          <StyledInput
            type="tel"
            id="phone"
            name="phone"
            placeholder="Teléfono*"
            required
          />
        </StyledRow>
        <StyledRow>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Correo Electrónico*"
            required
          />
          <StyledInput
            type="text"
            id="city"
            name="city"
            placeholder="Ciudad"
            required
          />
        </StyledRow>
        <StyledRow>
          <StyledTextarea
            id="queryDescription"
            name="queryDescription"
            placeholder="Describe la consulta que deseas realizar"
            required
          ></StyledTextarea>
        </StyledRow>
        <StyledRow>
          <StyledInput
            type="text"
            id="additionalInfo"
            name="additionalInfo"
            placeholder="Información Adicional"
          />
        </StyledRow>
      </StyledForm>
      <StyledContainerButtons>
        <StyledbuttonA type="reset">Cancelar</StyledbuttonA>
        <StyledbuttonB type="submit">Enviar</StyledbuttonB>
      </StyledContainerButtons>
    </StyledContainer>
  );
}

export { Contact };
