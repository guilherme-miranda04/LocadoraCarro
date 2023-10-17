import FirstStep from "../../components/FirstStep";
import SecondStep from "../../components/SecondStep";
import ThirdStep from "../../components/ThirdStep";

import { useForm } from "../../components/hooks/useForm";

import stylesProgress from "./HomeProgress.module.css";

function HomeProgress() {
  const formComponents = [<FirstStep />, <SecondStep />, <ThirdStep />];

  const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);

  return (
    <div className={stylesProgress.app}>
      <div className={stylesProgress.header}>
        <h2></h2>
        <p></p>
      </div>
      <div className={stylesProgress.form_container}>
        <p></p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={stylesProgress.inputs_container}>
            {currentComponent}
          </div>
          <div className={stylesProgress.actions}>
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>Voltar</span>
            </button>

            <button type="submit">
              <span>Avançar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomeProgress;
