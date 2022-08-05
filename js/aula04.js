
console.group("Ler conteudos com jQuery")
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());
console.groupEnd()
console.group("Alterar conteúdos com jQuery")
$("#paragrafo_2").text("Conteúdo escrito com jQuery")
console.log($("#paragrafo_2").text());
console.groupEnd()
console.group("Ler vários conteudos com jQuery")
let lista = $("p")
console.log(lista);
console.log(lista.text());
$("p").each(function() {
    console.log(this.textContent);
})
console.group()
console.group("Alterar conteúdos com jQuery")
$("li").text("li escrito com jQuery")
console.groupEnd()
console.group("Criar elementos com jQuery")
$("<button>", {
    text:"click aqui",
    class:"btn btn-primary"
}).appendTo("body")
$("body").append(
    $("<br>"),
    $("<b>", {text: "Texto negrito"}),
    $("<br>"),
    $("<i>", {text:"Texto italico"})
)
console.groupEnd()
console.group('Mais de um item com jQuery')
$("<ul>").append(
    $("<li>", {text: "Item 1"}),
    $("<li>", {text: "Item 2"})
).appendTo("#paragrafo_3")
console.groupEnd()

console.group('Exercicio escrever mais de um item')
//1 table
//thead
// th
// th
// th
//tbody
//tr
//td
//td
//td
//tr
//td
//td
//td
$("body").append(
    $("<table>", {class:"table table-borderer table-striped"})
)
$("table").append(
    $("<thead>")
)
$("thead").append(
    $("<th>", {text: "Title 1"}),
    $("<th>", {text: "Title 2"}),
    $("<th>", {text: "Title 3"})
)
$("table").append(
    $("<tbody>")
)
$("tbody").append(
    $("<tr>"),
    $("<tr>")
)
$("tr").append(
    $("<td>", {text: "Text 1"}),
    $("<td>", {text: "Text 2"}),
    $("<td>", {text: "Text 3"})
)
console.groupEnd()

console.group('Exercicio tabela versão Professor')
$("<table>", {class: "table table-primary table-striped"}).append(
    $("<Thead>", {class: "bg-primary"}).append(
        $("<th>", {text:"Nome"}),
        $("<th>", {text:"Idade"}),
        $("<th>", {text:"Cidade"})
    ),
    $("<Tbody>").append(
        $("<tr>").append(
            $("<td>", {text:"Ariana"}),
            $("<td>", {text:"22"}),
            $("<td>", {text:"Jba"})
        ),
        $("<tr>").append(
            $("<td>", {text:"Ciclano"}),
            $("<td>", {text:"23"}),
            $("<td>", {text:"Hdo"})
        )
    )
).appendTo("body")
console.groupEnd()
console.group('Evento de click em qualquer lugar')
$("p").on("click", function() {
    alert("Opa")
})
console.groupEnd()
console.group('Evento de click em qualquer lugar')
$("li").on("click", function() {
    console.warn("Você clicou em um li")
})
$("#ok").on("click", function() {
    alert("Você clicou num item com id ok")
})
console.groupEnd()


console.group('Exercicio 2')
    //No html ter um button com id=add
    //no JS ter um evento de clique para quem tenha o id add
    //nesse evento deve ser inserido no HTML um novo P com class alert alert-danger
    //Depois ter outro button no HTML com o id limpar
    //e no JS um evento de clique para quem tem o id = limpar
    //para remover todos os elementos com class alert
    //$(".alert").remove()

let count = 0;

$("#add").on("click", function() {
    count++
    $("<p>",{class:"alert alert-danger", text: `Paragrafo ${count}`}).appendTo("body")
})
$("#limpar").on("click", function() {
    count = 0;
    $(".alert").remove()
})


console.groupEnd()