import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 48px 120px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

const StyledContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 740px;
  height: 680px;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    justify-content: center;
  }
`;

const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: #212f3c;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const StyledImg = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 4px #343434;
  max-width: 740px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 680px;
  width: 480px;
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 64px 32px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 32px;
  }
`;

const StyledContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    gap: 8px;
  }
`;

const StyledbuttonA = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  background-color: inherit;
  font-size: 16px;
  font-weight: 600;
  border-color: #212f3c;
  color: #212f3c;
  border: none;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const StyledbuttonB = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  background-color: #212f3c;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border: none;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  padding-left: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export {
  StyledContainer,
  StyledContainerSection,
  StyledTitle,
  StyledImg,
  StyledCard,
  StyledContainerButtons,
  StyledbuttonA,
  StyledbuttonB,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledContainerInput,
};
