import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  background-color: #22303d;
  color: white;
  text-align: center;
  width: 100%;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

const StyledTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledObservation = styled.p`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export { StyledFooter, StyledTitle, StyledObservation };
