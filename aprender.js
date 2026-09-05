const caixa = document.querySelector(".selecionada")

const texto = [...document.querySelectorAll('.adicio')]

const btn = document.querySelector('.adiciona')

const rmv = document.querySelector('.remove')

//botões de adicionar e remover coisas da lista
btn.addEventListener('click', ()=>{ 
  texto.map((el)=>{
  if (el.value.trim() == ""){
    return
    
  }
    
    const novo = document.createElement('div')
    novo.setAttribute("class", "toquei")
    novo.innerHTML = el.value

    const lixeira = document.createElement('img')
    lixeira.setAttribute('src', 'lixeira.jpg')
    lixeira.setAttribute('class', 'img')
  
    novo.addEventListener('click', ()=>{
  novo.classList.toggle('cria')
      
  })
    
    lixeira.addEventListener('click', ()=>{
      caixa.removeChild(novo)
      
    })
    
    novo.appendChild(lixeira)
    caixa.appendChild(novo)
    
    })  
  })


    rmv.addEventListener('click', ()=>{    
      const remo = [...caixa.children]
      remo.map((el)=>{
        el.remove()
      })  
  })
 



