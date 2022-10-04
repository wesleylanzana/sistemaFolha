
let labelNome= document.querySelector("#labelNome");
let nome = document.querySelector("#nome");

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");

let senha =  document.querySelector("#senhaCadastro");
let labelSenha = document.querySelector("#labelSenha");

let confirmarSenha = document.querySelector("#senhaCadastroConfirmar");
let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha");

//campo nome
nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<strong>Nome *Insira no mínimo 3 caracteres</strong>'
        nome.setAttribute('style','border-color: red')
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = '<strong>Nome</strong>'
        nome.setAttribute('style', 'border-color: green')
    }
}) 
    
//campo usuário
usuario.addEventListener('keyup', () =>{
    if(usuario.value.length <= 5){
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = '<strong>Usuário *Insira no mínimo 6 caracteres</strong>'
        usuario.setAttribute('style', 'border-color: red')
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = '<strong>Usuário</strong>'
        usuario.setAttribute('style', 'border-color: green')
    }
})


//campo senha
senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 4){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '<strong>Senha * Insira no mínimo 5 caracteres </strong>'
        senha.setAttribute('style','border-color: red')
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = '<strong>Senha</strong>'
        senha.setAttribute('style', 'border-color: green')
    }
})

//campo confirmar Senha
confirmarSenha.addEventListener('keyup', () =>{
    if(confirmarSenha.value != senha.value){
        labelConfirmarSenha.setAttribute('style', 'color: red')
        labelConfirmarSenha.innerHTML = '<strong>Confirmar senha * As senhas não conferem </strong>'
        confirmarSenha.setAttribute('style','border-color: red')
    }else{
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = '<strong>Confirmar senha</strong>'
        confirmarSenha.setAttribute('style', 'border-color: green')
    }
})