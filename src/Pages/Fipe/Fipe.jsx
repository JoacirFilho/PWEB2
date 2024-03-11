import React from "react";
import './Fipe.css'

import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import config_fipe from "../../../Axios/config_fipe";


function Fipe() {

  const [input, setInput] = useState('');
  const [codigoFipe, setCodigoFipe] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert("Preencha algum código Fipe do carro!")
      return;
    }

    try{
      const response = await config_fipe.get(`${input}`);
      setCodigoFipe(response.data)
      setInput("")

    }catch{
      alert("Ops, erro ao buscar número do Fipe!");
      setInput("")

    }
  }

  return (
    <div className="container">
      <h1 className="title">Digite o Código Fipe do Seu Carro!</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o Código Fipe..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      
      </div>

      {Object.keys(codigoFipe).length > 0 && (
        <main className='main'>
          <h2>N° do Fipe: {codigoFipe[0].codigoFipe}</h2>
          <span>Marca: {codigoFipe[0].marca}</span>
          <span>Modelo: {codigoFipe[0].modelo}</span>
          <span>Data de Consulta: {codigoFipe[0].dataConsulta}</span>
          <span>Tipo de combustível: {codigoFipe[0].combustivel}</span>
          <span>Valor: {codigoFipe[0].valor}</span>
    
         
        </main>

      )}
      
    </div>

  );
}

export default Fipe;