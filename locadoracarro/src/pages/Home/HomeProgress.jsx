import FirstStep from "../../components/FirstStep";
import SecondStep from "../../components/SecondStep";
import ThirdStep from "../../components/ThirdStep";

import MultiStep from 'react-multistep'

import stylesProgress from "./HomeProgress.module.css";

function HomeProgress() {

  const steps = [
    { title: "Cliente", name: "Name A", component: <FirstStep /> },
    { title: "Veículo", name: "Email", component: <SecondStep /> },
    { title: "Informações Extra", name: "Password", component: <ThirdStep /> },
  ];

  return (
    <div className={stylesProgress.app}>
      <MultiStep 
        steps={steps} 
      />
    </div>
  );
}

export default HomeProgress;
