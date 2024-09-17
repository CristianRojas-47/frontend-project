import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 80px;
  background-color: #22303D;
  box-shadow: 0px 0px 4px 4px #d6dbdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    font-size: 16px;
    color: #d6dbdf;
    font-weight: 600;
  }

  & p {
    font-size: medium;
    color: #d6dbdf;
    font-weight: 200;
  }

`;

export { StyledFooter };
