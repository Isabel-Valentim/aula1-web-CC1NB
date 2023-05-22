// document é um objeto e uma variável - fica nele todo o conteúdo html 

// 3 tipos de seletores getElementBy
// TagName - 
// ClassName
// ID

// variável.style.color

addEventListener("mouseover", function(event){
    event.preventDefault(); 
    console.log("Passou!")
})

// keyup - soltar o dedo do teclado, keydown - teclar
// click
var body = document.body;
var docElem = documentp.documentElement; 
var limite = 100; 


// botão que leva o usuário para o topo da página para quando o usuário tiver rolado a tela para baixo
var tamPagina = Math.max(body.scrollHeight, body.offsetHeight, doc.clientheight, docElem.scrollHeight, docElem.offsetHeight)

var botao = document.getElementById("back-to-top");

if(tamPagina != undefined){
    limite = tamPagina/4;
}

window.addEventListener("scroll", function(event){
    if(docElem.scrollTop > limite){ // scroll top é o topo da tela que está sendo visto
        botao.style.opacity = 1;
    }else{
        botao.style.opacity = 0;
    }
})