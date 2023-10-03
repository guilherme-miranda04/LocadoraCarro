import SideBar from "../../components/SideBar"

import stylesRents from "./Rents.module.css";

function Rents() {
  return (
    <div className={stylesRents.container_home}>
      <SideBar />
      <main>
        <h1>Locações</h1>
        <div className={stylesRents.tableAnalystic}>

        </div>
      </main>
    </div>
  );
}

export default Rents;