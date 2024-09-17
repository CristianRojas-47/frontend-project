import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  max-height: 104px;
  background-color: red;
  box-shadow: 0px 0px 4px 4px #d6dbdf;
`;

const StyledContainer = styled.div`
  height: 32px;
  width: 100%;
  background-color: #22303d;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #f8f9f9;
    font-size: large;
    font-weight: 600;
  }
`;

const StyledPrincipal = styled.div`
  height: inherit;
  background-color: #f8f9f9;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;

  & h1 {
    font-size: 24px;
    font-weight: 600;
    color: #22303d;
    justify-content: center;
    display: flex;
    align-content: center;
    align-items: center;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  & p {
    font-size: 14px;
    font-weight: 500;
    color: #22303d;
  }
`;

export { StyledHeader, StyledContainer, StyledPrincipal };
