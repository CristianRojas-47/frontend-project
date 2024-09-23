import { StyledContainer, StyledTitle } from "./styles";

function Contact() {
    return (
        <StyledContainer>
            <StyledTitle>Contacto</StyledTitle>
            <form>
                <div>
                    <label htmlFor="fullName">Nombres y Apellido:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="city">Ciudad:</label>
                    <input type="text" id="city" name="city" required />
                </div>
                <div>
                    <label htmlFor="queryDescription">Describe la consulta que deseas realizar:</label>
                    <textarea id="queryDescription" name="queryDescription" required></textarea>
                </div>
                <div>
                    <label htmlFor="additionalInfo">Información Adicional:</label>
                    <input type="text" id="additionalInfo" name="additionalInfo" />
                </div>
                <button type="reset">Cancelar</button>
                <button type="submit">Enviar</button>
            </form>
        </StyledContainer>
    );
}

export { Contact };