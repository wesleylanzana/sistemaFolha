let btnEye = document.querySelector('#fa-eye') //selecionando a classe do olho

//adicionando evento de click nessa variável
btnEye.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha'); //pegando o valor do id senha

    //Pegando o valor original do atributo type que é password e setando para text no click
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})