// Import styled components and necessary icons for comments
import movie from "../../assets/movie.avif";
import {
  StyledContainer,
  StyledImageSection,
  StyledCommentsSection,
  StyledTitle,
  StyledComment,
  StyledAboutSection,
  StyledAboutText,
  StyledCommentsGrid,
  StyledImage,
} from "./styles";

// Comments component renders a section about the platform and user comments
function Comments() {
  return (
    <>
      <StyledContainer>
        <StyledImageSection>
          <StyledImage src={movie} alt="Movie scene" />
        </StyledImageSection>
        <StyledCommentsSection>
          <StyledAboutSection>
            <StyledTitle>¿Quiénes somos?</StyledTitle>
            <StyledAboutText>
              En CineScout, creemos que el cine tiene la capacidad de
              transformar vidas, conectar culturas y abrirnos a nuevas formas de
              pensar. Por eso hemos creado una plataforma que te permite
              descubrir películas más allá de los grandes estrenos, explorando
              títulos independientes, clásicos olvidados y recomendaciones
              únicas adaptadas a tus gustos. Nuestro equipo está compuesto por
              expertos y apasionados del cine que quieren hacer de tu
              experiencia cinematográfica algo especial. Aquí tienes varios
              textos con dos párrafos para la sección ¿Quiénes somos?: Opción 1:
              En CineScout, creemos que el cine tiene la capacidad de
              transformar vidas, conectar culturas y abrirnos a nuevas formas de
              pensar. Por eso hemos creado una plataforma que te permite
              descubrir películas más allá de los grandes estrenos, explorando
              títulos independientes, clásicos olvidados y recomendaciones
              únicas adaptadas a tus gustos. Nuestro equipo está compuesto por
              expertos y apasionados del cine que quieren hacer de tu
              experiencia cinematográfica algo especial.
            </StyledAboutText>
            <StyledAboutText>
              Lo que hace diferente a CineScout es la comunidad que hemos
              construido. No solo proporcionamos reseñas y sinopsis, sino que
              creamos un espacio donde puedes interactuar, opinar y compartir
              tus experiencias con otros cinéfilos. Ya sea que estés buscando
              recomendaciones personalizadas o quieras unirte a una conversación
              sobre tu película favorita, CineScout es el lugar ideal para
              hacerlo.Lo que hace diferente a CineScout es la comunidad que
              hemos construido. No solo proporcionamos reseñas y sinopsis, sino
              que creamos un espacio donde puedes interactuar, opinar y
              compartir tus experiencias con otros cinéfilos. Ya sea que estés
              buscando recomendaciones personalizadas o quieras unirte a una
              conversación sobre tu película favorita, CineScout es el lugar
              ideal para hacerlo.
            </StyledAboutText>
          </StyledAboutSection>

          <StyledTitle>Comentarios</StyledTitle>
          <StyledCommentsGrid>
            <StyledComment>
              <strong>José:</strong>
              <p>
                CineScout me ha ayudado a descubrir muchas películas
                independientes que no conocía. Es mi sitio de referencia para
                ver qué película ver el fin de semana.
              </p>
            </StyledComment>
            <StyledComment>
              <strong>Daniel:</strong>
              <p>
                Me encanta la interfaz de CineScout, es muy intuitiva y siempre
                encuentro películas interesantes para agregar a mi lista de
                deseos.
              </p>
            </StyledComment>
            <StyledComment>
              <strong>Luis:</strong>
              <p>
                Una plataforma que realmente entiende lo que los fanáticos del
                cine buscan. Las recomendaciones personalizadas son un toque muy
                especial.
              </p>
            </StyledComment>
            <StyledComment>
              <strong>María:</strong>
              <p>
                CineScout es mi plataforma favorita para descubrir películas
                nuevas. La interfaz es amigable y siempre encuentro reseñas
                interesantes de mis películas favoritas.
              </p>
            </StyledComment>
            <StyledComment>
              <strong>Andrés:</strong>
              <p>
                Me gusta cómo puedo ver las opiniones de otros usuarios antes de
                decidir qué película ver. CineScout ha mejorado mi experiencia
                como espectador.
              </p>
            </StyledComment>
            <StyledComment>
              <strong>Carolina:</strong>
              <p>
                He probado varias plataformas para descubrir películas, pero
                CineScout tiene las mejores reseñas y una comunidad activa que
                me encanta.
              </p>
            </StyledComment>
          </StyledCommentsGrid>
        </StyledCommentsSection>
      </StyledContainer>
    </>
  );
}

export { Comments };
