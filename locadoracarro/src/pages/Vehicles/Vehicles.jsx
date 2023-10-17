import { useState } from "react";
import { toast } from "react-toastify";

import SideBar from "../../components/SideBar";
import { ModalEditVehicles } from "../../components/Modals/Vehicles/ModalEditVehicles";
import { ModalAddVehicles } from "../../components/Modals/Vehicles/ModalAddVehicles";

import VehiclesTable from "./VehiclesTable";

import AddIcon from "@mui/icons-material/Add";
import stylesVehicles from "./Vehicles.module.css";


function Vehicles() {
  const [modalAddVehiclesOpen, setModalAddVehiclesOpen] = useState(false);
  const [modalEditVehiclesOpen, setModalEditVehiclesOpen] = useState(false);

  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const person1 = {
    plate: "PHX-1029",
    brand: "FORD",
    model: "TESTER",
    status: "Disponivel",
  };
  const person2 = {
    plate: "PHX-1029",
    brand: "CHEVROLET",
    model: "TESTER",
    status: "Indisponivel",
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
    setModalEditVehiclesOpen(true);
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

  rows.push(person1, person2);
  return (
    <div className={stylesVehicles.container}>
      <SideBar />
      <main>
        <h1>Lista de Veículos</h1>
        <div className={stylesVehicles.tableVehicles}>
          <VehiclesTable
            rows={rows}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />
        </div>

        {modalAddVehiclesOpen && (
          <ModalAddVehicles
            closeAddVehiclesModal={() => {
              setModalAddVehiclesOpen(false);
            }}
            onSubmit={handleSubmit}
          />
        )}
        {modalEditVehiclesOpen && (
          <ModalEditVehicles
            closeEditVehiclesModal={() => {
              setModalEditVehiclesOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
        <div className={stylesVehicles.btnDiv}>
          <button
            className={stylesVehicles.darkButton}
            onClick={() => setModalAddVehiclesOpen(true)}
          >
            <AddIcon />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Vehicles;
