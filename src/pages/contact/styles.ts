import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 80px;
  gap: 48px;

  @media (max-width: 768px) {
    padding: 24px 16px;
    gap: 24px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledInput = styled.input`
  height: 60px;
  width: 100%;
  padding: 0 32px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: #f1f1f1;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 16px;
    height: 50px;
  }
`;

const StyledTextarea = styled.textarea`
  height: 180px;
  width: 100%;
  padding: 16px 32px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: #f1f1f1;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
    height: 120px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StyledContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 16px;
  }
`;

const StyledbuttonA = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-color: #212f3c;
  color: #212f3c;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

const StyledbuttonB = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  background-color: #212f3c;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  border: none;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

export {
  StyledContainer,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledRow,
  StyledTextarea,
  StyledbuttonA,
  StyledContainerButtons,
  StyledbuttonB,
};
