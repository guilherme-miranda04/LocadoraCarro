import stylesFirst from "./FirstStep.module.css";

function ThirdStep () {
  return (
    <div className={stylesFirst.appContainer}>
      <h3>Informações extras</h3>
      <div className={stylesFirst.textfield}>
        <label htmlFor="numberCNH">Nº da CNH</label>
        <input
          type="Number"
          id="numberCNH"
          name="numberCNH"
          placeholder="Insira o número da CNH"
          required
        />
      </div>
    </div>
  )
}

export default ThirdStep;