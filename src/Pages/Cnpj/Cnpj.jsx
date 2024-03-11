import React from "react";
import './Cnpj.css'

import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import config_cnpj from "../../../Axios/config_cnpj";


function Cnpj() {

  const [input, setInput] = useState('');
  const [cnpj, setCnpj] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert("Preencha algum CNPJ!")
      return;
    }

    try{
      const response = await config_cnpj.get(`${input}`);
      setCnpj(response.data)
      setInput("")

    }catch{
      alert("Ops, erro ao buscar CNPJ!");
      setInput("")

    }
  }

  return (
    <div className="container">
      <h1 className="title">Digite o CNPJ da Empresa!</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite um CNPJ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      
      </div>

      {Object.keys(cnpj).length > 0 && (
        <main className='main'>
          <h2>CNPJ: {cnpj.cnpj}</h2>

          <span>{cnpj.nome_fantasia}</span>
          <span>Data de Criação em {cnpj.data_inicio_atividade}</span>
          <span>{cnpj.municipio} - {cnpj.uf}</span>
          <span>{cnpj.natureza_juridica}</span>
          <span>{cnpj.cnae_fiscal_descricao}</span> 
          <span>Razão Social:{cnpj.razao_social}</span>
          
                  
         
        </main>

      )}
      
    </div>

  );
}

export default Cnpj;