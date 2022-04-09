function gerarSenha(){
    let slider = document.getElementById("slider"); //definir tamanho dos caracteres
    let sizePassword = document.getElementById("valor"); //tamanho dos caracteres
    let password = document.getElementById("senha-gerada"); //elemento para escrever a senha
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newPassword = '';

    // //escrever o tamanho das caracteres
    sizePassword.innerHTML = slider.value;

    //gerar uma senha e colocar na variavel newPassword
    for(let i = 0; i < slider.value; i++){
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    password.innerHTML = newPassword;
}
function copiarSenha(){
    console.log('entrei na função de copiar senha');
    let senha = document.getElementById("senha-gerada");
    navigator.clipboard.writeText(senha.innerHTML);
    console.log(senha.innerHTML);
}
function funcao(){
    let slider = document.getElementById("slider").value; //definir tamanho dos caracteres
    let sizePassword = document.getElementById("valor"); //tamanho dos caracteres
    sizePassword.innerHTML = slider;
    
}