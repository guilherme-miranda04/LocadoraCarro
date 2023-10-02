import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import InputMask from "react-input-mask";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import login from "../../components/login.svg";

import './Login.css';


function Login() {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
        <div className="container">
            <div className="form_image">
                <img src={login} alt="imgWelcome" />
            </div>
            <div className="form">
                <form /* onSubmit={handleSubmit} */>
                    <div className="form_header">
                        <div className="title">
                            <h1>LOGIN</h1>
                        </div>
                    </div>
                    <div className="input_box">
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

                    <div className="input_box">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Informe sua senha"
                            required
                        /* onChange={handleChangePassword} */
                        />
                    </div>

                    <div className="continue_button">
                        <button /* onClick={handleSubmit} */>Logar</button>
                    </div>
                    <br></br>
                    <div className="textfield_remember">
                        <FormControlLabel
                            value="start"
                            control={<Checkbox {...label} size="small" />}
                            label="Mostrar Senha"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="textfield_createcount">
                        <p>
                            Ainda não tem conta?{" "}
                            <Link className="hiperlink" to="/register">
                                {" "}
                                Criar Conta
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login