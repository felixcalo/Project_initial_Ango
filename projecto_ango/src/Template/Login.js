import React from "react";
import Logo from "../img/login_img.png";
import fb from "../img/facebook.png";
import tw from "../img/google-plus.png";
import go from "../img/instagram.png";
import inst from "../img/twitter.png";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    return (
      <div className="form_log_div">
        <div className="div_logo">
          <image className="logo" src={Logo} />
        </div>
        <div className="inputs">
          <input
            type="text"
            className="form-control"
            id="emal"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control"
            id="senh"
            name="senha"
            placeholder="Senha"
          />
        </div>
        <div className="botons">
          <button
            type="button"
            name="éntrar"
            className="btn btn-primary sm btn-block"
          >
            Entrar
          </button>
        </div>
        <label>
          <input name="isGoing" type="checkbox" /> Lembrar senha ?
        </label>{" "}
        <label className="inscrever">
          <Link to="/Inscricao"> Criar Conta</Link>
        </label>
        <div className="ou">Ou</div>
        <div className="redes_sociais">
          <div className="redes_social">
            <img src={fb} name="fbo" alt="facebook" />
            <img src={go} name="goo" alt="google" />
            <img src={inst} name="insta" alt="Instagram" />
            <img src={tw} name="twis" alt="Twitter" />
          </div>
        </div>
      </div>
    );
  }
}
