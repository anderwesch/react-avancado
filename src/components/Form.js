import { useState } from 'react';

function Form() {
  const [ fields, setFields ] = useState({
    name: "",
    lastName: "Weschnhoski",
    genero: 0,
    description: "Apenas algum texto em uma área de texto"
  });

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(fields);
  }

  return(
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          Nome:
          <input type="text" name="name" value={ fields.name } onChange={ handleChange } />
        </label>
        <br />
        <label>
          Sobrenome:
          <input type="text" name="lastName" value={ fields.lastName } onChange={ handleChange } />
        </label>
        <br />
        <label>
          Gênero
          <select name="genero" value={ fields.genero } onChange={ handleChange }>
            <option value="0">Selecione</option>
            <option value="1">Masculino</option>
            <option value="2">Feminino</option>
          </select>
        </label>
        <br />
        <label>
          Descrição:
          <textarea name="description" value={ fields.description } onChange={ handleChange } />
        </label>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Form;