import { StyledFooter } from "./styles";

interface FooterProps {
  title: string;
  description: string;
}

function Footer(props: FooterProps) {
  const { title, description } = props;

  return (
    <StyledFooter>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledFooter>
  );
}

export { Footer };
