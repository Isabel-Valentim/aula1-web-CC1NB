//
// Script Nimbus2000
//
var tit = document.getElementById("chapterNumber")

tit.addEventListener("mouseover", function(event){
  	event.preventDefault();
    console.log("Passou!");
})

document.addEventListener("keyup", function(){
	console.log("teste")
	})


var body = document.body;
var docElem = document.documentElement;
var limite=100;

var tamPagina = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight)

var botao = document.getElementById("back-to-top");

if(tamPagina != undefined){
  limite = tamPagina/4;
}

window.addEventListener("scroll", function(event){
  if(docElem.scrollTop > limite){
    botao.style.opacity = 1;
  }else{
    botao.style.opacity = 0;
  }})


// EOF
var img = document.getElementById("book"); 
listimgs = ['imgs/book1.jpeg', 
'imgs/book2.jpeg', 
'imgs/book3.jpeg',
'imgs/book4.jpeg',
'imgs/book5.jpeg',
'imgs/book6.jpeg',
'imgs/book7.jpeg'
]

var btn1 = document.getElementById("bt1");
var btn2 = document.getElementById("bt2");
var btn3 = document.getElementById("bt3");
var btn4 = document.getElementById("bt4");
var btn5 = document.getElementById("bt5");
var btn6 = document.getElementById("bt6");
var btn7 = document.getElementById("bt7");
var btnbuttoms = document.getElementById("book-buttoms");
var btnfoward = document.getElementById("move-foward");

var currentImg = img.scr
btn1.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[0]
})
btn2.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[1]
})
btn3.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[2]
})
btn4.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[3]
})
btn5.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[4]
})
btn6.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[5]
})
btn7.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[6]
})
btnbuttoms.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[6]
})
btnfoward.addEventListener("click", function(event){
  event.preventDefault(); 
  currentImg = listimgs[6]
})
