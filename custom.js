//tela de login
function btnPassword(){
 let inputSenha = document.querySelector('#senha')
  
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }

}

//tela de cadastro
function btnVerSenha(){
    let inputSenhaCadastro = document.querySelector('#senhaCadastro')
  
    if(inputSenhaCadastro.getAttribute('type') == 'password'){
        inputSenhaCadastro.setAttribute('type', 'text')
    } else {
        inputSenhaCadastro.setAttribute('type', 'password')
    }
}

function btnConfirmarSenha(){
    let senhaCadastroConfirmar = document.querySelector('#senhaCadastroConfirmar')
  
    if(senhaCadastroConfirmar.getAttribute('type') == 'password'){
        senhaCadastroConfirmar.setAttribute('type', 'text')
    } else {
        senhaCadastroConfirmar.setAttribute('type', 'password')
    }
}


//Cadastrar usuário
function cadastrar(){

}
