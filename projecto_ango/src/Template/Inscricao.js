import React from "react";
import { Link } from "react-router-dom";
import Yup from "yup";
export default (props) => (
  <div className="container">
    <div className="form_cadastro">
      <fieldset>
        <legend className="">Cadastrar Usuário</legend>

        <input
          id="nom"
          placeholder=" Nome"
          autofocus=""
          required=""
          className="form-control"
        />

        <input
          id="prenom"
          placeholder=" Prenome "
          autofocus=""
          required=""
          className="form-control"
        />

        <input
          id="telephone"
          type="tel"
          placeholder="Telefone"
          pattern="06[0-9]{8}"
          className="form-control"
        />

        <input
          id="email"
          type="email"
          placeholder="prenom.nom@polytechnique.com"
          required=""
          pattern="[a-zA-Z]*.[a-zA-Z]*@polytechnique.edu"
          className="form-control"
        />
      </fieldset>

      <fieldset>
        <legend>Informations personnelles</legend>
        <label for="age">
          Age<em>*</em>
        </label>
        <input
          id="age"
          type="number"
          placeholder="xx"
          pattern="[0-9]{2}"
          required=""
          className="form-control"
        />

        <label for="sexo">Sexe</label>
        <select id="sexo" className="form-control">
          <option value="F" name="sexe">
            Femme
          </option>
          <option value="H" name="sexe">
            Homme
          </option>
        </select>

        <button id="cadastro" name="cadastro" className="btn btn-primary">
          Cadastrar
        </button>
        <Link to="/Login">
          <button id="retornar" name="retornar" className="btn btn-secondary">
            Cancelar
          </button>
        </Link>
      </fieldset>
    </div>
  </div>
);
