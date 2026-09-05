//o butao começar e esconder o titilo
const butao = document.querySelector(".comecar");
const pergunta = document.querySelector(".quiz");
const titulo = document.querySelector(".titulo");
const titulo1 = document.querySelector(".titulo1");
const recarre = document.querySelector('.recarrega');
butao.addEventListener("click", function() {
  setTimeout(function(){
    pergunta.style.display = "block";
    butao.style.display = "none"
    titulo.style.display = "none"
    titulo1.style.display = "none"
    
  }, 200);
});


//botao pergunta 1
const resposta = document.getElementsByClassName('resposta');
const resultado = document.getElementById('resultado');
let respondeu = false
for (let i = 0;i < resposta.length; i++) {
  
  resposta[i].addEventListener('click', function() {
    if (respondeu === true) {
      return;
    }
    respondeu = true;
    if (resposta[i].dataset.correta ==="true") {
      
     resposta[i].style.backgroundColor = "green"
      
      resultado.textContent = "Resposta: correta"
      
      resultado.style.color = "green"
      
    } else {
      
      resposta[i].style.backgroundColor = "red"
      
      resultado.textContent = "Resposta: errada"
      
      resultado.style.color = "red"
    }
    
  })
}
recarre.addEventListener('click', function(){
    setTimeout(function(){
      location.reload()
    }, 1000)
})
