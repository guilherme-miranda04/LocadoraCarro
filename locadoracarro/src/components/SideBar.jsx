/* import { useContext } from "react"; */
import { Link } from "react-router-dom";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import styles from "./SideBar.module.css";

function SideBar() {
  /* const { userContext, setContext } = useContext(Context); */

  return (
    <div className={styles.side_nav}>
      <div className={styles.menu}>
        <span>
          <MenuOutlinedIcon />
        </span>
        <h2>MENU</h2>
      </div>
      <ul>
        <Link to="/home">
          <li>
            <span>
              <HomeIcon />
              <p>Home</p>
            </span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link to="/vehicles">
          <li>
            <span>
              <DirectionsCarIcon />
              <p>Veículos</p>
            </span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link to="/rents">
          <li>
            <span>
              <AttachMoneyIcon />
              <p>Locações</p>
            </span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link to="/register">
          <li>
            <span>
              <PersonIcon />
              <p>Clientes</p>
            </span>
          </li>
        </Link>
      </ul>
      <ul>
        <Link to="/">
          <li>
            <span>
              <ExitToAppOutlinedIcon className={styles.icon} />
              <p>Sair</p>
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
