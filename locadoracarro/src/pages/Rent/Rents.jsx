import { useState } from "react";

import SideBar from "../../components/SideBar";

import RentsTable from "./RentsTable";

import AddIcon from "@mui/icons-material/Add";
import stylesRents from "./Rents.module.css";

import { toast } from "react-toastify";
import { ModalAddRents } from "../../components/Modals/Rent/ModalAddRents";
import { ModalEditRents } from "../../components/Modals/Rent/ModalEditRents";

function Rents() {
  const [modalAddRentsOpen, setModalAddRentsOpen] = useState(false);
  const [modalEditRentsOpen, setModalEditRentsOpen] = useState(false);

  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const rents1 = {
    ID: "1",
    numberCNH: "222222222222",
    plate: "TESTER",
    startDate: "01/10/2023",
    endDate: "20/10/2023",
  };
  const rents2 = {
    ID: "2",
    numberCNH: "111111111111",
    plate: "PHX-1029",
    startDate: "05/10/2023",
    endDate: "15/10/2023",
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
    setModalEditRentsOpen(true);
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

  rows.push(rents1, rents2);
  return (
    <div className={stylesRents.container}>
      <SideBar />
      <main>
        <h1>Lista de Locações</h1>
        <div className={stylesRents.tableVehicles}>
          <RentsTable
            rows={rows}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />
        </div>

        {modalAddRentsOpen && (
          <ModalAddRents
            closeAddRentsModal={() => {
              setModalAddRentsOpen(false);
            }}
            onSubmit={handleSubmit}
          />
        )}
        {modalEditRentsOpen && (
          <ModalEditRents
            closeEditRentsModal={() => {
              setModalEditRentsOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
        <div className={stylesRents.btnDiv}>
          <button
            className={stylesRents.darkButton}
            onClick={() => setModalAddRentsOpen(true)}
          >
            <AddIcon />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Rents;
