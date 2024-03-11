import React from "react";
import './Home.css'


function Home() {

  return (

    <div className="container">
        <div className="descricao">Descrição do Sistema</div>
        <div className="area-main">
            <main className='main-home'>
                <h2>CEP</h2>
                <span className="CEP">
                No menu tem a opção Cep, que permite buscar informações associadas a 
                um CEP inserido. Após o usuário digitar o CEP desejado e clicar na lupa. Se a busca for 
                bem-sucedida, ele exibe as informações retornadas, incluindo o endereço, 
                DDD da área, bairro, cidade, estado, e o registro do IBGE. Se ocorrer algum erro durante a 
                busca, uma mensagem de erro será exibida ao usuário. Teste, utilizando esse Exemplo de <b>CEP:63400000</b>
                </span>
         
             </main>

            <main className='main-home'>
                <h2>CNPJ</h2>
                <span className="CNPJ">
                A opção CNPJ no menu permite aos usuários buscar informações associadas 
                a um CNPJ inserido. Após o usuário digitar o CNPJ desejado e clicar na lupa,
                 o sistema faz uma solicitação. Se a busca for bem-sucedida, 
                 ele exibe as informações retornadas, incluindo o nome da empresa, data de criação, 
                 cidade, estado e uma breve descrição. No caso de um erro durante a busca, uma 
                 mensagem de erro será exibida ao usuário. Teste utilizando o seguinte 
                 exemplo de <b>CNPJ: 19131243000197.</b>
                </span>
            </main>

            <main className='main-home'>
                <h2>Fipe</h2>
                <span>
                A opção Fipe no menu permite aos usuários buscar informações vinculadas a um 
                código Fipe inserido. Após o usuário inserir o código Fipe desejado e acionar a lupa, 
                o sistema vai solicitar as informações. Se a busca for bem-sucedida, são exibidas as 
                informações relevantes, incluindo marca, modelo, ano, tipo de combustível
                 e valor do veículo. Se ocorrer algum problema durante a busca, uma mensagem de 
                 erro será mostrada ao usuário. Experimente utilizando o seguinte
                  exemplo de <b>Código Fipe: 0010049.</b>
                </span>
         
            </main>
        </div>
        
    </div>

  );
}

export default Home;