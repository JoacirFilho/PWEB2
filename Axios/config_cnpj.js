import axios from "axios";

//API: https://viacep.com.br/ws/
//API: https://brasilapi.com.br/api/cnpj/v1/{cnpj}

const config_cnpj = axios.create({
    baseURL: "https://brasilapi.com.br/api/cnpj/v1/"
});

export default config_cnpj;