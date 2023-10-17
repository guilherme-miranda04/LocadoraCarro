import { useState } from "react";
import { toast } from "react-toastify";

import stylesmodal from "./ModalAddRents.module.css";

export const ModalAddRents = ({
  closeAddRentsModal,
  onSubmit,
}) => {
  const [formState, setFormState] = useState({
    numberCNH: "",
    plate: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    closeAddRentsModal(false);
    toast.success("Cadastro realizado com sucesso!", {
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
    <div className={stylesmodal.modal_container}>
      <div className={stylesmodal.modal}>
        <div className={stylesmodal.title}>
          <h2>Adicionar Veículo</h2>
        </div>
        <form>
          <div className={stylesmodal.main_imputs}>
            <div className={stylesmodal.textfield}>
              <label htmlFor="numberCNH">CNH:</label>
              <input
                type="text"
                placeholder="CNH"
                name="numberCNH"
                value={formState.numberCNH}
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="plate">Placa:</label>
              <input
                type="text"
                placeholder="Placa"
                name="plate"
                value={formState.brand}
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="startDate">Data Inicial:</label>
              <input
                type="date"
                name="startDate"
                value={formState.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="endDate">Data Final:</label>
              <input
                type="date"
                name="endDate"
                value={formState.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={stylesmodal.button_teste}>
            <button
              type="submit"
              className={stylesmodal.btn_submit}
              onClick={() => closeAddRentsModal(false)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={stylesmodal.btn_submit}
              onClick={handleSubmit}
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
