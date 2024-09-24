import {
  StyledContainer,
  StyledTitle,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableData,
  StyledActionButton,
  StyledActionContainer,
} from "./styles";
import { MdDelete, MdEdit } from "react-icons/md";

function UserManagement() {
  return (
    <StyledContainer>
      <StyledTitle>Gestión de usuarios</StyledTitle>
      <StyledTable>
        <thead>
          <StyledTableRow>
            <StyledTableHeader>ID.</StyledTableHeader>
            <StyledTableHeader>Nombre</StyledTableHeader>
            <StyledTableHeader>Correo electrónico</StyledTableHeader>
            <StyledTableHeader>Rol</StyledTableHeader>
            <StyledTableHeader>Acciones</StyledTableHeader>
          </StyledTableRow>
        </thead>
        <tbody>
          {[...Array(6)].map((_, index) => (
            <StyledTableRow key={index}>
              <StyledTableData data-label="ID.">{index + 1}</StyledTableData>
              <StyledTableData data-label="Nombre">
                Nombre {index + 1}
              </StyledTableData>
              <StyledTableData data-label="Correo electrónico">
                usuario{index + 1}@email.com
              </StyledTableData>
              <StyledTableData data-label="Rol">Usuario</StyledTableData>
              <StyledTableData data-label="Acciones">
                <StyledActionContainer>
                  <StyledActionButton>
                    <MdDelete size="20px" color="red" />
                  </StyledActionButton>
                  <StyledActionButton>
                    <MdEdit size="20px" color="black" />
                  </StyledActionButton>
                </StyledActionContainer>
              </StyledTableData>
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
}

export { UserManagement };
