import { useState } from "react";

import stylesmodaledit from "./ModalEditRents.module.css";

import { toast } from "react-toastify";

export const ModalEditRents = ({ closeEditRentsModal, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      numberCNH: "",
      plate: "",
      startDate: "",
      endDate: "",
    }
  );

  const handleChangeEdit = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    closeEditRentsModal(false);
    toast.success("Registro atualizado com sucesso!", {
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

  return (
    <div className={stylesmodaledit.modal_container}>
      <div className={stylesmodaledit.modal}>
        <div className={stylesmodaledit.title}>
          <h2>Editar locação</h2>
        </div>
        <form>
          <div className={stylesmodaledit.main_imputs}>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="numberCNH">CNH:</label>
              <input
                type="text"
                placeholder="Placa"
                name="numberCNH"
                value={formState.numberCNH}
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="plate">Placa:</label>
              <input
                type="text"
                placeholder="Placa"
                name="plate"
                value={formState.plate}
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="startDate">Data Inicial:</label>
              <input
                type="date"
                name="startDate"
                value={formState.startDate}
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="endDate">Data Final:</label>
              <input
                type="date"
                name="endDate"
                value={formState.endDate}
                onChange={handleChangeEdit}
                required
              />
            </div>
          </div>
          <div className={stylesmodaledit.button_teste}>
            <button
              type="submit"
              className={stylesmodaledit.btn_submit}
              onClick={() => closeEditRentsModal(false)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={stylesmodaledit.btn_submit}
              onClick={handleSubmitEdit}
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
