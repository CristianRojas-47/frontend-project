import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 80px;
  gap: 48px;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
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
`;

const StyledTextarea = styled.textarea`
  height: 180px;
  width: 100%;
  padding: 16px 32px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: #f1f1f1;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

const StyledContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

const StyledbuttonA = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-color: #212F3C;
  color: #212F3C;
`;

const StyledbuttonB = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  background-color: #212F3C;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  border: none;
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
