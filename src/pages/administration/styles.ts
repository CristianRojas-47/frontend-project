import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 48px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.th`
  text-align: left;
  padding: 16px;
  background-color: #eeeeee;
  font-weight: bold;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const StyledTableData = styled.td`
  text-align: left;
  padding: 16px;
  background-color: #f9f9f9;
`;

const StyledActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledActionContainer = styled.div`
  display: flex;
  gap: 12px; /* Esto agrega un espacio entre los botones */
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
