import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 32px 64px;
  gap: 48px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }

  @media (max-width: 600px) {
    padding: 16px;
    gap: 16px;
  }
`;

const StyledImg = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 4px #aaa;
  width: 100%;
  max-width: 500px;

  @media (max-width: 1000px) {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #eee;
  background-color: #fafafa;
  border-radius: 20px;
  padding: 24px;
  gap: 24px;

  @media (max-width: 1000px) {
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 600px) {
    padding: 16px;
    gap: 16px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 52px;
  font-weight: 500;
  color: #212f3c;

  @media (max-width: 1000px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const StyledOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTitleDescription = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #212f3c;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const StyledDescription = styled.p`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export {
  StyledContainer,
  StyledImg,
  StyledSection,
  StyledTitle,
  StyledOption,
  StyledTitleDescription,
  StyledDescription,
};
