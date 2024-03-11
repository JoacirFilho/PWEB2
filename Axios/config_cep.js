import axios from "axios";

//API: https://viacep.com.br/ws/

const config_cep = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default config_cep;