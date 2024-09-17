import { StyledHeader, StyledContainer, StyledPrincipal } from "./styles";
import { IHeaderLink } from "./types";

interface HeaderProps {
  title: string;
  links?: IHeaderLink[];
  date: string;
}

function Header(props: HeaderProps) {
  const { title, links, date } = props;

  return (
    <StyledHeader>
      <StyledContainer>
        <p>{date}</p>
      </StyledContainer>
      <StyledPrincipal>
        <h1>{title}</h1>
        <div>
          {links && links.map((link, index) => <p key={index}>{link.label}</p>)}
        </div>
      </StyledPrincipal>
    </StyledHeader>
  );
}

export { Header };
