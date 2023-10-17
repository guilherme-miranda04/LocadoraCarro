import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import RegistersTable from "./RegistersTable";
import SideBar from "../../components/SideBar";

import AddIcon from "@mui/icons-material/Add";

import stylesRegister from "./Registers.module.css";
import { ModalAddRegisters } from "../../components/Modals/Register/ModalAddRegisters";
import { ModalEditRegisters } from "../../components/Modals/Register/ModalEditRegisters";

function Registers() {
  const [modalAddRegistersOpen, setModalAddRegistersOpen] = useState(false);
  const [modalEditRegistersOpen, setModalEditRegistersOpen] = useState(false);

  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const client = {
    name: "Guilherme Miranda",
    telephone: "(47) 9 9716-3576",
    numberCNH: "2222222222",
    street: "Rua Maestro Egon Bohn",
    numberHouse: "202",
  };

  const client2 = {
    name: "Gustavo Miranda",
    telephone: "(47) 9 9997-3809",
    numberCNH: "1111111111",
    street: "Rua Itopava Central",
    numberHouse: "502",
  };

  const handleDeleteRow = async (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
    toast.warn("Registro excluído com sucesso!", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalEditRegistersOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  rows.push(client, client2);
  return (
    <div className={stylesRegister.container}>
      <SideBar />
      <main>
        <h1>Lista de Locações</h1>
        <div className={stylesRegister.tableVehicles}>
          <RegistersTable
            rows={rows}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />
        </div>

        {modalAddRegistersOpen && (
          <ModalAddRegisters
            closeAddRegistersModal={() => {
              setModalAddRegistersOpen(false);
            }}
            onSubmit={handleSubmit}
          />
        )} 
        {modalEditRegistersOpen && (
          <ModalEditRegisters
            closeEditRegistersModal={() => {
              setModalEditRegistersOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
          )}
        <div className={stylesRegister.btnDiv}>
          <button
            className={stylesRegister.darkButton}
            onClick={() => setModalAddRegistersOpen(true)}
          >
            <AddIcon />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Registers;
