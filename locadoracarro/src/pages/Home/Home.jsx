import SideBar from "../../components/SideBar"

import "./Home.css";

function Home() {
    return (
        <div className="container_home">
            <SideBar />
            <main>
                <h1>Locadora</h1>
            </main>
        </div>
    );
}

export default Home;