import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import stylesmodal from "./ModalAddRegisters.module.css";
import ReactInputMask from "react-input-mask";

export const ModalAddRegisters = ({ closeAddRegistersModal, onSubmit }) => {
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
    closeAddRegistersModal(false);
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
    <div className={stylesmodal.modal_container}>
      <div className={stylesmodal.modal}>
        <div className={stylesmodal.title}>
          <h2>Adicionar Cliente</h2>
        </div>
        <form>
          <div className={stylesmodal.main_imputs}>
            <div className={stylesmodal.textfield}>
              <label htmlFor="fullName">Nome Completo:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Insira seu nome"
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="birthDate">Data de Nascimento</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                placeholder="Data de Nascimento"
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="gender">Gênero</label>
              <select
                id="gender"
                name="gender"
                onChange={handleChange}
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
            <div className={stylesmodal.textfield}>
              <label htmlFor="telephone">Telefone</label>
              <ReactInputMask
                type="text"
                id="telephone"
                name="telephone"
                mask="(99) 9 9999-9999"
                placeholder="(00) 0 0000-0000"
                onChange={handleChange}
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="numberCNH">Nº da CNH</label>
              <input
                type="Number"
                id="numberCNH"
                name="numberCNH"
                placeholder="Insira o número da CNH"
                required
              />
            </div>
            <div className={stylesmodal.textfield}>
              <label htmlFor="validityCNH">Validade CNH</label>
              <input
                type="date"
                id="validityCNH"
                name="validityCNH"
                placeholder="Insira a validade da CNH"
                required
              />
            </div>
          </div>

          <h3>Endereço</h3>
          <div className={stylesmodal.main_imputs}>
            <div className={stylesmodal.textfield}>
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
            <div className={stylesmodal.textfield}>
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
            <div className={stylesmodal.textfield}>
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
            <div className={stylesmodal.textfield}>
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
            <div className={stylesmodal.textfield}>
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
            <div className={stylesmodal.textfield}>
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
          <div className={stylesmodal.button_teste}>
            <button
              type="submit"
              className={stylesmodal.btn_submit}
              onClick={() => closeAddRegistersModal(false)}
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
