import { useState } from "react";

import stylesmodaledit from "./ModalEditVehicles.module.css";

import { toast } from "react-toastify";

export const ModalEditVehicles = ({ closeEditVehiclesModal, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      plate: "",
      brand: "",
      model: "",
      status: "",
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

    closeEditVehiclesModal(false);
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
          <h2>Editar</h2>
        </div>
        <form>
          <div className={stylesmodaledit.main_imputs}>
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
              <label htmlFor="brand">Marca:</label>
              <input
                type="text"
                placeholder="Marca"
                name="brand"
                value={formState.brand}
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="model">Modelo:</label>
              <input
                type="text"
                placeholder="Modelo"
                name="model"
                value={formState.model}
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="status">Status:</label>
              <div className={stylesmodaledit.textfield_type}>
                <select
                  name="status"
                  id="status"
                  value={formState.status}
                  onChange={handleChangeEdit}
                  required
                >
                  <option value="" disabled selected>
                    Selecione...
                  </option>
                  <option value="AVAILABLE">Disponível</option>
                  <option value="UNAVAILABLE">Indisponível</option>
                </select>
              </div>
            </div>
          </div>
          <div className={stylesmodaledit.button_teste}>
            <button
              type="submit"
              className={stylesmodaledit.btn_submit}
              onClick={() => closeEditVehiclesModal(false)}
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
