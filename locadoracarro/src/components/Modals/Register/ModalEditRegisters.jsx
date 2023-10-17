import { useEffect, useState } from "react";

import stylesmodaledit from "./ModalEditRegisters.module.css";

import { toast } from "react-toastify";
import ReactInputMask from "react-input-mask";

export const ModalEditRegisters = ({ closeEditRegistersModal, defaultValue }) => {
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

    closeEditRegistersModal(false);
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

  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [numberHouse, setNumHouse] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  /* Consts do Endereço */
  const handleChangeZipCode = (event) => setZipCode(event.target.value);
  const handleChangeStreet = (event) => setStreet(event.target.value);
  const handleChangeNumberHouse = (event) => setNumHouse(event.target.value);
  const handleChangeNeighborhood = (event) =>
    setNeighborhood(event.target.value);
  const handleChangeCity = (event) => setCity(event.target.value);
  const handleChangeState = (event) => setState(event.target.value);

  /* Converção do tipo zipCode, para requisição */
  useEffect(() => {
    if (zipCode.trim() !== (null || undefined)) requestAddress(zipCode.trim());
  }, [zipCode]);

  /* Requisição ViaCEP*/
  async function requestAddress(zipCode) {
    /* Define o método da requisição (API) */
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    /* Faz a consulta na Api passando os parametros */
    const response = await fetch(
      "https://viacep.com.br/ws/" + zipCode + "/json",
      options
    );

    /* Define os valores buscados da Api no Input */
    const responseAddress = await response.json();
    if (responseAddress?.erro != true) {
      setNeighborhood(responseAddress?.bairro);
      setCity(responseAddress?.localidade);
      setStreet(responseAddress?.logradouro);
      setState(responseAddress?.uf);
    } else {
      toast.error("O CEP inserido não existe!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className={stylesmodaledit.modal_container}>
      <div className={stylesmodaledit.modal}>
        <div className={stylesmodaledit.title}>
          <h2>Adicionar Cliente</h2>
        </div>
        <form>
          <div className={stylesmodaledit.main_imputs}>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="fullName">Nome Completo:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Insira seu nome"
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="birthDate">Data de Nascimento</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                placeholder="Data de Nascimento"
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="gender">Gênero</label>
              <select
                id="gender"
                name="gender"
                onChange={handleChangeEdit}
                required
              >
                <option value={""} selected disabled>
                  Selecione...
                </option>
                <option value="Male">Masculino</option>
                <option value="Female">Feminino</option>
                <option value="Non-Binary">Não Binário</option>
              </select>
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="telephone">Telefone</label>
              <ReactInputMask
                type="text"
                id="telephone"
                name="telephone"
                mask="(99) 9 9999-9999"
                placeholder="(00) 0 0000-0000"
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="numberCNH">Nº da CNH</label>
              <input
                type="Number"
                id="numberCNH"
                name="numberCNH"
                placeholder="Insira o número da CNH"
                onChange={handleChangeEdit}
                required
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="validityCNH">Validade CNH</label>
              <input
                type="date"
                id="validityCNH"
                name="validityCNH"
                placeholder="Insira a validade da CNH"
                onChange={handleChangeEdit}
                required
              />
            </div>
          </div>

          <h3>Endereço</h3>
          <div className={stylesmodaledit.main_imputs}>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="zipCode">CEP</label>
              <ReactInputMask
                type="cep"
                id="zipCode"
                name="cep"
                mask="99999-999"
                placeholder="00000-000"
                required
                onChange={handleChangeZipCode}
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="street">Rua</label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Informe sua rua"
                required
                onChange={handleChangeStreet}
                value={street}
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="numberHouse">Número</label>
              <input
                type="number"
                id="number"
                name="numberHouse"
                placeholder="Informe seu número"
                required
                onChange={handleChangeNumberHouse}
                value={numberHouse}
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="neighborhood">Bairro</label>
              <input
                type="text"
                id="neighborhood"
                name="neighborhood"
                placeholder="Informe seu bairro"
                required
                onChange={handleChangeNeighborhood}
                value={neighborhood}
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Informe sua cidade"
                required
                onChange={handleChangeCity}
                value={city}
              />
            </div>
            <div className={stylesmodaledit.textfield}>
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Informe o seu estado"
                required
                onChange={handleChangeState}
                value={state}
              />
            </div>
          </div>
          <div className={stylesmodaledit.button_teste}>
            <button
              type="submit"
              className={stylesmodaledit.btn_submit}
              onClick={() => closeEditRegistersModal(false)}
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
