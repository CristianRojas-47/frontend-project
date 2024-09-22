import { StyledFooter, StyledTitle, StyledObservation } from "./styles";

interface FooterProps {
  title: string;
  description: string;
}

function Footer(props: FooterProps) {
  const { title, description } = props;

  return (
    <StyledFooter>
      <StyledTitle>{title}</StyledTitle>
      <StyledObservation>{description}</StyledObservation>
    </StyledFooter>
  );
}

export { Footer };
