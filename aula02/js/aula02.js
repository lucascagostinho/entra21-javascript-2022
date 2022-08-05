procedimento(); //chamada
//essa função está sendo chamada e não precisa de argumentos

bemVindo("Lucas");

bemVindo(true);

login("lucas", 1234);

maiorDeIdade(15);

let resultado = maiorDeIdade(16);
console.log(resultado);

console.log(maiorDeIdade(18));

let concatenado = maiorDeIdade(10) + maiorDeIdade(20);
console.log(concatenado);

console.log(calcularMedia(8, 9, 10))

console.log(verificarSituacao(5));

console.log(
    verificarSituacao(
        calcularMedia(8, 9, 10)
        )
    );

function procedimento() { //declaração
    console.log("Esse tipo de função sempre executa da mesma forma, porque não tenho parametros para deixar dinamico");

    console.warn("Essa função também não retorna nada");
}

function bemVindo(nome) {
    console.log(typeof(nome));
    console.warn("Bem vindo: " + nome);// Dessa forma estou contatenando
    console.warn("Bem vindo: ", nome);// Dessa forma estou executando um de cada
}

function login(userName, password) {
    console.error("O usuário" + userName + " cuja senha é: " + password + " está inadinplente e não pode entrar")
}

function maiorDeIdade(idade){
    if (idade < 18) {
        return "Menor de idade"
    }else{
        return "Maior de idade"
    }
}

function calcularMedia(nota01, nota02, nota03){
    return (nota01 + nota02 + nota03)/3

}

function verificarSituacao(media){
    return media >= 7 ? "Aprovado" : "Reprovado";
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function cafe(){
    return "café"
}

console.log("Somando ", somar(2, 2));
console.log("Subtraindo ", subtrair(2, 2));
console.log("Multiplicando ", multiplicar(2, 2));
console.log("Dividindo ", dividir(2, 2));

console.log(cafe());