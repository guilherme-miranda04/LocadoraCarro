import SideBar from "../../components/SideBar";

import stylesHome from "./Home.module.css";
import HomeProgress from "./HomeProgress";

function Home() {
  return (
    <div className={stylesHome.container}>
      <SideBar />
      <main>
        <h1>Cadastramento de Locação</h1>
        <div className={stylesHome.homeProgress}>
          <HomeProgress />
        </div>
      </main>
    </div>
  );
}

export default Home;
