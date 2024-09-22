import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  gap: 40px;
  justify-content: center;
  padding: 48px 32px;

  @media (max-width: 580px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
  }
`;

const StyledLi = styled.li`
  list-style-type: none;
`;

const StyledImg = styled.img`
  background-color: azure;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #343434;
  width: 230px;
  height: 345px;

  @media (max-width: 580px) {
    width: 300px;
    height: auto;
  }
`;

const StyledName = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #566573;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  align-items: center;
`;

export { StyledUl, StyledName, StyledImg, StyledLi, StyledLink };
