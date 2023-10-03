import ReactInputMask from "react-input-mask";
import SideBar from "../../components/SideBar"

import styles from "./Registers.module.css";

function Registers() {
  return (
    <div className={styles.container}>
      <SideBar />
      <main>
        <h1>Clientes</h1>
        <div className={styles.container_card}>
          <div className={styles.title1}>Informações Pessoais</div>
          <form action="#">
            <div className={styles.clients_details}>
              <div className={styles.input_box}>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Insira seu nome"
                  required
                />
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  placeholder="Data de Nascimento"
                  required
                  value={""}
                  onChange={""}
                />
                <label htmlFor="gender">Genêro</label>
                <select
                  id="gender"
                  name="gender"
                  required
                  onChange={""}
                >
                  <option value="Male">Masculino</option>
                  <option value="Female">Feminino</option>
                  <option value="Non-Binary">Não Binário</option>
                </select>
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
                <label htmlFor="numberCNH">Nº da CNH</label>
                <input
                  type="Number"
                  id="numberCNH"
                  name="numberCNH"
                  placeholder="Insira o número da CNH"
                  required
                />
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
          </form>
        </div>
        <div className={styles.container_card}>
          <div className={styles.title2}>Endereço de Cobrança</div>
          <form action="#">
            <div className={styles.address_details}>
              <div className={styles.input_box}>
                <label htmlFor="zipCode">CEP</label>
                <ReactInputMask
                  type="cep"
                  id="zipCode"
                  name="cep"
                  mask="99999-999"
                  placeholder="00000-000"
                  required
                  onChange={""}
                />

                <label htmlFor="street">Rua</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Informe sua rua"
                  required
                  onChange={"handleChangeStreet"}
                  value={"street"}
                />

                <label htmlFor="numberHouse">Número</label>
                <input
                  type="number"
                  id="number"
                  name="numberHouse"
                  placeholder="Informe seu número"
                  required
                  onChange={"handleChangeNumberHouse"}
                  value={"numberHouse"}
                />

                <label htmlFor="neighborhood">Bairro</label>
                <input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  placeholder="Informe seu bairro"
                  required
                  onChange={"handleChangeNeighborhood"}
                  value={"neighborhood"}
                />

                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Informe sua cidade"
                  required
                  onChange={"handleChangeCity"}
                  value={"city"}
                />

                <label htmlFor="state">Estado</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Informe o seu estado"
                  required
                  onChange={"handleChangeState"}
                  value={"state"}
                />
              </div>
              <div className={styles.button}>
                <input
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </form>
        </div>
      </main >
    </div >
  );
}

export default Registers;