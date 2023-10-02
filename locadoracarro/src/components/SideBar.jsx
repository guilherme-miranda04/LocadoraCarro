/* import { useContext } from "react"; */
import { Link } from "react-router-dom";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import styles from "./SideBar.module.css";

function SideBar() {
  /* const { userContext, setContext } = useContext(Context); */

  return (
    <div className={styles.header}>
      <div className={styles.side_nav}>
        <div className={styles.menu}>
          <span>
            <MenuOutlinedIcon />
          </span>
          <h2>MENU</h2>
        </div>
        <ul>
          <li>
            <Link to="/home">
              <span>
                <HomeIcon />
                <p>Home</p>
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          <li className={styles.option}>
            <Link to="/cadastroCarro">
              <span>
                <DirectionsCarIcon />
                <p>Veículos</p>
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cadastroLocacao">
              <span>
                <AttachMoneyIcon />
                <p>Locações</p>
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cadastroCliente">
              <span>
               <PersonIcon />
               <p>Clientes</p>
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">
              <span>
                <ExitToAppOutlinedIcon className={styles.icon} />
                <p>Sair</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;  