import { Login } from "./aula150login.js";

const callbackOk=()=>{
    
}
const noCallback=()=>{
    const config={
        cor: "#800",
        tipo:"ok",
        textos: null,
        comando_sn:null,
    }
    Msg.mostrar(config, "Erro", "Login não efetuado, usuario ou senha incorreta")
}

Login.login(callbackOk, noCallback);
