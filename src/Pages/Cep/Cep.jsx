import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import './Cep.css'
import config_cep from '../../../Axios/config_cep';


function Cep() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert("Preencha algum CEP!")
      return;
    }

    try{
      const response = await config_cep.get(`${input}/json`);
      setCep(response.data)
      setInput("")

    }catch{
      alert("Ops, erro ao buscar CEP!");
      setInput("")

    }
  }

  return (
    <div className="container">
      <h1 className="title">Digite o CEP Para Obter as Informações!</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite um CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>Endereço: {cep.logradouro}</span>
          <span>DDD da área: {cep.ddd}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade} - {cep.uf}</span>
          <span>Registro do IBGE: {cep.ibge}</span>
        </main>

      )}
      
    </div>

  );
}

export default Cep;