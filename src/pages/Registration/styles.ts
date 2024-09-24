import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 48px 120px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  justify-self: center;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 32px;
  width: 360px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const StyledContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;

  @media (max-width: 768px) {
    padding: 6px 0;
  }
`;

const StyledInput = styled.input`
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  padding-left: 8px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledbuttonB = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  background-color: #212f3c;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

export {
  StyledContainer,
  StyledCard,
  StyledForm,
  StyledContainerInput,
  StyledInput,
  StyledLabel,
  StyledbuttonB,
};
