
$("#meu_ip").on("click", function () {
    $.ajax(
        {
            url: "https://httpbin.org/ip",
            type: "get",
            success: function (retorno) {
                console.log("Funfou ehe", retorno);
            },
            error: function (motivo) {
                console.warn("Ixiiii", motivo)
            }
        }
    )
})

$("#eco_get").on("click", function(){
    console.log("Normal", "https://httpbin.org/get?nome=ARIANA SILVA&idade=22");
    console.log("ENCODE", encodeURI("https://httpbin.org/get?nome=ARIANA SILVA&idade=22"));
    console.log("DECODE", decodeURIComponent("https://httpbin.org/get?nome=ARIANA SILVA &idade=22"));
    $.ajax({
        url:encodeURI("https://httpbin.org/get?nome=ARIANA SILVA&idade=22"),
        type:"get",
        success: function(retorno){
            console.log("Funfou ehe", retorno);
        },
        error: function(motivo){
            console.warn("Errooo", motivo)
        }
    })
    
})

$("#delay_get").on("click", ()=> {
    let numero = $("#tempo").val()

    $.ajax({
        url: encodeURI("https://httpbin.org/delay/"+numero),
        type:"get",
        success: (retorno)=>{
            console.log("Acertô mizeravi", retorno)
        }, 
        error: (motivo)=>{
            console.warn("Errrrooo", motivo)
        }

    })
})


$("#eco_post").on("click", ()=> {
var objeto={
    nome: "Ariana",
    email:"arianamoreira5021@gmail.com"
};


$.ajax({
    url:"https://httpbin.org/post",
    type:"post",
    headers:{
        'Accept': "application/json",
    },
    data: JSON.stringify(objeto), //converte o objeto em string
    success:(dados)=>{
        alert("Veja os dados no console parça...")
        console.log(dados);
    },
    error:(erro)=>{
        alert("ERROOOO, olhe o console")
        console.log(erro)
    }
})
})

$("#busca_pokemon").on("click", ()=>{
    console.log("Iniciando busca...");

    let chave= $("#pokemon").val()
    console.log("Iremos buscar por", chave);


    $.ajax({
        url:encodeURI("https://pokeapi.co/api/v2/pokemon/" + chave),
        type:"get",
        success: (retorno)=>{
            console.log("Oia o pokemon!!!!", retorno.name);
            $("body").append(
                $("<div>", {class:"row"}).append(
                    $("<div>", {class: "col-3", text: retorno.id}),
                    $("<div>", {class: "col-3", text: retorno.name}),
                    $("<div>", {class: "col-3"}).append(
                        $("<img>", {src:retorno.sprites.front_default})
                    )
                )
            )
        }, 
        error: (erro)=>{
            console.warn("Vish, num deu ;-; ")
        }
    })
})

