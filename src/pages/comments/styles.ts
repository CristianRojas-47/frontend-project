import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 120px;
  height: 100vh;
`;

const StyledImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  padding: 24px;
`;

const StyledPlaceholder = styled.div`
  font-size: 24px;
  color: #333;
  padding: 32px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  text-align: center;
`;

const StyledCommentsSection = styled.div`
  flex: 2;
  padding-left: 24px;
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
`;

const StyledAboutSection = styled.div`
  margin-bottom: 50px;
`;

const StyledAboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  color: #333;
  margin-bottom: 24px;
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

const StyledCommentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: none;
`;

export {
  StyledContainer,
  StyledImageSection,
  StyledPlaceholder,
  StyledCommentsSection,
  StyledTitle,
  StyledComment,
  StyledAboutSection,
  StyledAboutText,
  StyledCommentsGrid,
  StyledImage,
};
