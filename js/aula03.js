console.warn("R E A D")
let leitura = document.getElementById("paragrafo_ler");

console.log(leitura);

console.log("Apenas o conteúdo ou textContent", leitura.textContent);

console.log("Apenas o coneúdo + elementos internos com HTML", leitura.innerHTML);

let btn_aqui = document.getElementById("ta_aqui")
console.log(btn_aqui);

console.log("Botao localizado ou textContent", btn_aqui.textContent);
console.log("Botao localizado com sucesso ou textContent", btn_aqui.innerHTML);


console.warn("READ MORE");
let paragrafos = [...document.getElementsByTagName("p")];
console.log("Lendo todos osparagrafos", paragrafos );

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

console.warn("write");
let escrita = document.getElementById("paragrafo_escrever");
escrita.title = "www.google.com";
escrita.textContent = "Esse paragrafo foi escrito com javascript";

document.getElementById("ta_aqui").textContent = "Botão alterado com js";

let mudar_texto = document.getElementById("alterar_1");
mudar_texto.title = "O span mudou cara";
mudar_texto.textContent = "Span has changed again"

let mudar_texto2 = document.getElementById("alterar_2");
mudar_texto2.title = "Será que mudou?";
mudar_texto2.textContent = "Mudou mesmo!"

function mudarTexto(conteudo){
    let elemento = document.getElementById("qualquer");

    elemento.title = conteudo;
    elemento.textContent = conteudo;
}


function addConteudo(conteudo){
    let enter = document.createElement("br");

    document.body.append(enter);

    let elemento = document.createElement("div");
    elemento.textContent = conteudo;

    document.body.append(elemento);
}

function addBtn(nomeBtn){
    let enter = document.createElement("br");
    document.button.append(enter);

    let textoBtn = document.createElement("title");
    textoBtn.textContent = nomeBtn;
    document.button.append(textoBtn);
}

