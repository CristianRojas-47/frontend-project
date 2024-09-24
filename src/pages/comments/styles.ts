import styled from "styled-components";

const StyledAboutSection = styled.div`
  margin-bottom: 50px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  padding: 0;
  min-height: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const StyledImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  padding: 0;
  max-width: 50%; 
  height: auto; 

  @media (max-width: 1024px) {
    margin-bottom: 24px;
    max-width: 100%;
    height: auto; 
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto; 
  object-fit: cover; 
`;

const StyledCommentsSection = styled.div`
  flex: 1;
  padding: 0 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 24px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

const StyledAboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

const StyledCommentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledComment = styled.div`
  background-color: #eeeeee;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

  p {
    margin: 8px 0 0;
  }

  strong {
    font-weight: 600;
  }
`;

export {
  StyledContainer,
  StyledImageSection,
  StyledCommentsSection,
  StyledTitle,
  StyledComment,
  StyledAboutSection,
  StyledAboutText,
  StyledCommentsGrid,
  StyledImage,
};
