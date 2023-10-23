import { useState } from "react";
import { toast } from "react-toastify";

import stylesmodal from "./ModalAddVehicles.module.css";

export const ModalAddVehicles = ({ closeAddVehiclesModal, onSubmit }) => {
  const [formState, setFormState] = useState({
    plate: "",
    brand: "",
    model: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    closeAddVehiclesModal(false);
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
              <label htmlFor="plate">Placa:</label>
              <input
                type="text"
                placeholder="Placa"
                name="plate"
                value={formState.plate}
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="brand">Marca:</label>
              <input
                type="text"
                placeholder="Marca"
                name="brand"
                value={formState.brand}
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="model">Modelo:</label>
              <input
                type="text"
                placeholder="Modelo"
                name="model"
                value={formState.model}
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="status">Status:</label>
              <div className={stylesmodal.textfield_type}>
                <select
                  name="status"
                  id="status"
                  value={formState.status}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Selecione...
                  </option>
                  <option value="AVAILABLE">Disponível</option>
                  <option value="MAINTENCE">Manutenção</option>
                </select>
              </div>
            </div>
          </div>
          <div className={stylesmodal.button_teste}>
            <button
              type="submit"
              className={stylesmodal.btn_submit}
              onClick={() => closeAddVehiclesModal(false)}
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
