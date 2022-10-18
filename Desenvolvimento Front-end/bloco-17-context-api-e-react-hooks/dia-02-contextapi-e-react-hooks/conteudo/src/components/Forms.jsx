import React, { useState, useContext } from "react";
import formContext from "../context/context";

function Forms(props) {
  const [inputValues, setInputValues] = useState({
    nome: "",
    idade: "",
    cidade: "",
    language: "",
  });

  console.log(props);

  const getValue = ({ target }) => {
    const { name, value } = target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { addInfo } = useContext(formContext);

  const submitInfo = (event) => {
    event.preventDefault();
    addInfo({
      nome: inputValues.nome,
      idade: inputValues.idade,
      cidade: inputValues.cidade,
      language: inputValues.language,
    });
  };

  return (
    <div>
      <input type="text" placeholder="Nome" name="nome" onChange={getValue} />
      <input
        type="number"
        placeholder="idade"
        name="idade"
        onChange={getValue}
      />
      <input
        type="text"
        placeholder="Cidade"
        name="cidade"
        onChange={getValue}
      />
      <label htmlFor="fundamentos">Fundamentos</label>
      <input
        type="radio"
        name="language"
        value="Fundamentos"
        id="fundamentos"
        onChange={getValue}
      />
      <label htmlFor="front-end">Front-end</label>
      <input
        type="radio"
        name="language"
        value="Front-end"
        id="front-end"
        onChange={getValue}
      />
      <label htmlFor="back-end">Back-end</label>
      <input
        type="radio"
        name="language"
        value="Back-end"
        id="back-end"
        onChange={getValue}
      />
      <label htmlFor="ciencias">Ciências da computação</label>
      <input
        type="radio"
        name="language"
        value="Ciencias da computação"
        id="ciencias"
        onChange={getValue}
      />
      <button type="submit" onClick={submitInfo}>
        Enviar
      </button>
    </div>
  );
}

export default Forms;
