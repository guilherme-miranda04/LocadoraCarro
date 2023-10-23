import stylesFirst from "./FirstStep.module.css";

function SecondStep() {
  const [formState, setFormState] = useState({
    plate: "",
    brand: "",
    model: "",
    status: "",
  });

  return (
    <div className={stylesFirst.appContainer}>
      <h3>Buscar Veículos</h3>
      <div className={stylesFirst.textfield}>
        <label htmlFor="plate">Placa:</label>
        <input
          type="text"
          placeholder="Placa"
          name="plate"
          value={"formState.plate"}
          onChange={"handleChange"}
          required
        />
      </div>
    </div>
  );
}

export default SecondStep;
