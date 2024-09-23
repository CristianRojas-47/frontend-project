import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 48px 120px;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  justify-self: center;
`;

const StyledContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 740px;
  height: 680px;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: #212f3c;
`;

const StyledImg = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 4px #343434;
  max-width: 740px;
  height: auto;
`;

const StyledCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 680px;
  width: 480px;
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 64px 32px;
`;

const StyledContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  width: 80%;
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
`;

const StyledbuttonB = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  background-color: #212f3c;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border: none;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
`;

const StyledInput = styled.input`
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
`;

const StyledLabel = styled.label`
font-size: 16px;
padding-left: 12px;
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
