import { useState, useEffect } from "react";

import ReactInputMask from "react-input-mask";
import SideBar from "../../components/SideBar"

import styles from "./Registers.module.css";


function Registers() {

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
  const handleChangeNeighborhood = (event) => setNeighborhood(event.target.value);
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
      }
    };

    /* Faz a consulta na Api passando os parametros*/
    const response = await fetch(
      "https://viacep.com.br/ws/" + zipCode + "/json",
      options,
    );

    /* Define os valores buscados da Api no Input*/
    const responseAddress = await response.json();
    setNeighborhood(responseAddress?.bairro);
    setCity(responseAddress?.localidade);
    setStreet(responseAddress?.logradouro);
    setState(responseAddress?.uf);


    if (zipCode === null) {
      setNeighborhood("");
      setCity("");
      setStreet("");
      setState("");
    }

  }

  return (
    <div className={styles.container}>
      <SideBar />
      <main>
        <h1>Cadastro de Cliente</h1>
        <div className={styles.container_form}>
          <form action="#">
            <div className={styles.container_card}>
              <div className={styles.details}>
                <span className={styles.title}>Informações Pessoais</span>
                <div className={styles.fields}>
                  <div className={styles.inputs_field}>
                    <label htmlFor="fullName">Nome Completo</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Insira seu nome"
                      required
                    />
                  </div>
                  <div className={styles.inputs_field}>
                    <label htmlFor="birthDate">Data de Nascimento</label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      placeholder="Data de Nascimento"
                      required
                    />
                  </div>
                  <div className={styles.inputs_field}>
                    <label htmlFor="gender">Genêro</label>
                    <select
                      id="gender"
                      name="gender"
                      required
                    >
                      <option selected disabled>Selecione...</option>
                      <option value="Male">Masculino</option>
                      <option value="Female">Feminino</option>
                      <option value="Non-Binary">Não Binário</option>
                    </select>
                  </div>
                  <div className={styles.inputs_field}>
                    <label htmlFor="telephone">Telefone</label>
                    <ReactInputMask
                      type="text"
                      id="telephone"
                      name="telephone"
                      mask="(99) 9 9999-9999"
                      placeholder="(00) 0 0000-0000"
                      required
                      onChange={""}
                    />
                  </div>
                  <div className={styles.inputs_field}>
                    <label htmlFor="numberCNH">Nº da CNH</label>
                    <input
                      type="Number"
                      id="numberCNH"
                      name="numberCNH"
                      placeholder="Insira o número da CNH"
                      required
                    />
                  </div>
                  <div className={styles.inputs_field}>
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
              </div>

              <div className={styles.container_card}>
                <div className={styles.address_details}>
                  <span className={styles.title}>Endereço de Cobrança</span>
                  <div className={styles.fields}>
                    <div className={styles.inputs_field}>
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
                    <div className={styles.inputs_field}>
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
                    <div className={styles.inputs_field}>
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
                    <div className={styles.inputs_field}>
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
                    <div className={styles.inputs_field}>
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
                    <div className={styles.inputs_field}>
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
                  <button className={styles.addBtn}>
                    <span className={styles.btnText}>Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main >
    </div >
  );
}

export default Registers;