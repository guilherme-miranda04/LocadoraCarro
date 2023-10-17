import { useState } from "react";
import { Link /* useNavigate */ } from "react-router-dom";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import login from "../../assets/login.svg";

import stylesLogin from "./Login.module.css";

function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <div className={stylesLogin.container_login}>
      <div className={stylesLogin.form_image}>
        <img src={login} alt="imgWelcome" />
      </div>
      <div className={stylesLogin.form}>
        <form /* onSubmit={handleSubmit} */>
          <div className={stylesLogin.form_header}>
            <div className={stylesLogin.title}>
              <h1>LOGIN</h1>
            </div>
          </div>
          <div className={stylesLogin.input_box}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Informe seu e-mail"
              required
              /* onChange={handleChangeEmail} */
            />
          </div>

          <div className={stylesLogin.input_box}>
            <label htmlFor="password">Senha</label>
            <input
              type={passwordShow ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Informe sua senha"
              required
              /* onChange={handleChangePassword} */
            />
          </div>

          <div className={stylesLogin.continue_button}>
            <button /* onClick={handleSubmit} */>
              Logar
              <Link className="teste" to="/home"></Link>
            </button>
          </div>
          <br></br>
          <div className={stylesLogin.textfield_remember}>
            <FormControlLabel
              value="start"
              onClick={togglePassword}
              control={
                <Checkbox
                  {...label}
                  style={{
                    color: "#22C55E",
                  }}
                  size="small"
                />
              }
              label="Mostrar senha"
              style={{
                color: "#F2F2F2",
              }}
            />
          </div>
          <br></br>
          <br></br>
          <div className={stylesLogin.textfield_createcount}>
            <p>
              Ainda não tem conta?{" "}
              <Link className={stylesLogin.hiperlink} to="/home">
                {" "}
                Criar Conta
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
