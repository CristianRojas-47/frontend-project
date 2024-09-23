import { useLocation } from "react-router-dom";
import { IHeaderLink } from "./utils";
import {
  StyledBrand,
  StyledContainer,
  StyledDate,
  StyledHeader,
  StyledLink,
  StyledPrincipal,
  StyledSection,
} from "./styles";

interface HeaderProps {
  title: string;
  links: IHeaderLink[];
  date: string;
}

function Header(props: HeaderProps) {
  const { title, links, date } = props;
  const location = useLocation();

  const filteredLinks = links
    .filter((link) => location.pathname !== link.to)
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledDate>{date}</StyledDate>
      </StyledContainer>
      <StyledPrincipal>
        <StyledBrand>{title}</StyledBrand>
        <StyledSection>
          {filteredLinks.map((link) => (
            <StyledLink key={link.label} to={link.to}>
              {link.label}
            </StyledLink>
          ))}
        </StyledSection>
      </StyledPrincipal>
    </StyledHeader>
  );
}

export { Header };
