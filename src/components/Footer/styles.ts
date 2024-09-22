import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 80px;
  background-color: #22303d;
  box-shadow: 0px 0px 4px 4px #d6dbdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledTitle = styled.h3`
  font-size: 14px;
  color: #f8f9f9;
  font-weight: 500;
`;

const StyledObservation = styled.p`
  color: #f8f9f9;
  font-size: 12px;
  font-weight: 300;
`;

export { StyledFooter, StyledTitle, StyledObservation };
