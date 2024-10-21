let nomeUsuário=" ";
let elemento=document.querySelector("#nome_usuário");
while (nomeUsuário==""){
    nomeUsuário=prompt("Qual o seu nome?");
}
if (nomeUsuário==null) {
    elemento.textContent="seja muito bem vindo";
}else{
    elemento.textContent=nomeUsuário;
}