import axios from "axios";

//API: https://brasilapi.com.br/api/fipe/preco/v1/

const config_fipe = axios.create({
    baseURL: "https://brasilapi.com.br/api/fipe/preco/v1/"
});

export default config_fipe;