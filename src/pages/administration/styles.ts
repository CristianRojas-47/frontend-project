import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 48px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const StyledTableHeader = styled.th`
  text-align: left;
  padding: 16px;
  background-color: #eeeeee;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledTableData = styled.td`
  text-align: left;
  padding: 16px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eeeeee;

  @media (max-width: 768px) {
    display: block;
    text-align: left;
    position: relative;
    padding-left: 0;
    white-space: normal;
    word-wrap: break-word;

    &:before {
      content: attr(data-label);
      position: relative;
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      text-align: left;
      white-space: normal;
    }
  }
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 24px;
    border-bottom: none;
    padding: 12px 0;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const StyledActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledActionContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

export {
  StyledContainer,
  StyledTitle,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableData,
  StyledActionButton,
  StyledActionContainer,
};
