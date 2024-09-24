import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
`;

const StyledMain = styled.main`
  flex: 1;
  box-sizing: border-box;
  padding: 16px; 
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px; 
  }

  @media (max-width: 480px) {
    padding: 8px; 
  }
`;

export { StyledPage, StyledMain };
