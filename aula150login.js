class Login{
    static logado = false
    static matLogado = null 
    static nomeLogado = null 
    static acessoLogado = null 
    static estiloCss = null
    static callbackOk = null
    static noCallback = null
    static config = {
        cor:"048",
        img: "olho.png"
    }
    static endpoint = "https://login.sabrinamendonca.repl.co/"

    static login=(callbackOk, noCallback, config = null)=>{
        if(config!=null){
            this.config = config
        }
        this.callbackOk=()=>{
            callbackOk()
        }
        this.noCallback=()=>{
            noCallback()
        }
        this.estiloCss = 
           " *{border: none;padding: 0px;margin: 0px;box-sizing: border-box;}" +
           " .fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%; height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: inherit; }" +
            ".baseLogin{display: flex;justify-content: center;align-items: stretch; width: 50%;box-sizing: inherit;}" +
            ".elementosLogin{display: flex;justify-content: center;align-items: flex-start; flex-direction: column;width: 50%;background-color: #eee;padding: 10px; box-sizing: inherit;border-radius: 10px 0px 0px 10px;}" +
            ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}" +
            ".logoLogin img{width: 90%;box-sizing: inherit; }" +
            ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit; margin-bottom: 10px } " +
           " .campoLogin label{font-size: 18px; }" +
            ".campoLogin input{font-size: 18px; padding: 5px; background-color: #fff;border-radius: 5px;}" +
            ".botoesLogin{display: flex;justify-content: space-around;align-items: center; width: 100%; box-sizing: inherit; }" +
            `.botoesLogin button{ cursor: pointer; background-color: #${this.config.cor}; color: #fff; border-radius: 5px; padding: 10px; box-sizing: inherit; width: 100px; }`

        const styleEstilo = document.createElement("style")
        styleEstilo.setAttribute("id", "idLogin")
        styleEstilo.setAttribute("rel", "stylesheet")
        styleEstilo.setAttribute("type", "text/css")
        styleEstilo.innerHTML = this.estiloCss
        document.head.appendChild(styleEstilo)

        //fundo login
        const fundoLogin = document.createElement("div")
        fundoLogin.setAttribute("id","fundoLogin")
        fundoLogin.setAttribute("class","fundoLogin")
        document.body.prepend(fundoLogin)

        //base login
        const baseLogin = document.createElement("div")
        baseLogin.setAttribute("id","baseLogin")
        baseLogin.setAttribute("class","baseLogin")
        fundoLogin.appendChild(baseLogin)

        //elementos login
        const elementosLogin = document.createElement("div")
        elementosLogin.setAttribute("id","elementosLogin")
        elementosLogin.setAttribute("class","elementosLogin")
        baseLogin.appendChild(elementosLogin)

        //campo login
        const campoLoginUser = document.createElement("div")
        campoLoginUser.setAttribute("id","campoLoginUser")
        campoLoginUser.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLoginUser)

        const labelUser = document.createElement("label")
        labelUser.innerHTML = "Username"
        campoLoginUser.appendChild(labelUser)

        const inputUser = document.createElement("input")
        inputUser.setAttribute("id","fUsername")
        inputUser.setAttribute("type","text")
        inputUser.setAttribute("name","fUsername")
        campoLoginUser.appendChild(inputUser)

        //senha
        const campoLoginSenha = document.createElement("div")
        campoLoginSenha.setAttribute("id","campoLoginSenha")
        campoLoginSenha.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLoginSenha)

        const labelSenha = document.createElement("label")
        labelSenha.innerHTML = "Senha"
        campoLoginSenha.appendChild(labelSenha)

        const inputSenha = document.createElement("input")
        inputSenha.setAttribute("id","fSenha")
        inputSenha.setAttribute("type","password")
        inputSenha.setAttribute("name","fSenha")
        campoLoginSenha.appendChild(inputSenha)

        //button
        const botoesLogin = document.createElement("div")
        botoesLogin.setAttribute("class", "botoesLogin")
        elementosLogin.appendChild(botoesLogin)

        const btnLogin = document.createElement("button")
        btnLogin.setAttribute("id", "btnLogin")
        btnLogin.innerHTML = "Login"
        btnLogin.addEventListener("click",(evt)=>{
            this.verificaLogin()
        })
        botoesLogin.appendChild(btnLogin)

        const btnCancelar = document.createElement("button")
        btnCancelar.setAttribute("id", "btnCancelar")
        btnCancelar.innerHTML = "Cancelar"
        btnCancelar.addEventListener("click",(evt)=>{
            this.fechar()
        })
        botoesLogin.appendChild(btnCancelar)

        const logoLogin = document.createElement("div")
        logoLogin.setAttribute("id", "logoLogin")
        logoLogin.setAttribute("class", "logoLogin")
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement("img")
        imgLogoLogin.setAttribute("src", this.config.img)
        imgLogoLogin.setAttribute("title", "CFB Cursos")
        logoLogin.appendChild(imgLogoLogin)

    }

    static verificaLogin=()=>{
        const mat = document.querySelector("#fUsername").value 
        const pas = document.querySelector("#fSenha").value

        const endpoint = `https://login.sabrinamendonca.repl.co/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true
                this.matLogado = mat
                this.nomeLogado = res.nome 
                this.acessoLogado = res.acesso 
                this.callbackOk()
                this.fechar()
            }else{
                this.logado = false
                this.matLogado = null
                this.nomeLogado = null
                this.acessoLogado = null
                this.noCallback()
            }
        })

        return true
    }

    static fechar=()=>{
        const fundoLogin = document.querySelector("#fundoLogin")
        fundoLogin.remove()
        
        const idLogin = document.querySelector("#idLogin")
        idLogin.remove()
    }
}

//export {Login};