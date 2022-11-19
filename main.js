import '@picocss/pico'
import './style.css'
const formConsultarCep = document.querySelector ('#consultarCep')
const inputCep = formConsultarCep.cep
const divDados = Document.querySelector('#dados')
const btnConsultarCep=
document.querySelector('#btnConsultarCep')

const loader= 
`<a href="#" aria-busy="true">
CONSULTANDO CPF, AGUARDE
</a>`

formConsultarCep.addEventListener ('submit', function (event){

  event.preventDefault() // anua o comportamento padrão de envio do form
  ativaLoader(true)
  consultarCep(inputCep.value)
  
})

async function consultarCep (){
  let response = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
  let dadosCep = await response.json()
  if(dadosCep.erro){
    divDados.innerHTML=`
    <div class="erro"> CEP não encontrado</div>`
  }
 divDados.innerHTML = `

 <p> Endereço: ${dadosCep.logradouro} </p>
 <p> Localidade: ${dadosCep.localidade} </p>

 `
ativaLoader(false)
 
}

function ativaLoader(ativo){
  if (ativo){
    btnConsultarCep.setAttribute('aria-busy', 'true')
    btnConsultarCep.textContent = ('Consultando Cep')

  } else{
    btnConsultarCep.removeAttribute('aria-busy')
    btnConsultarCep.textContent = ('Consultar')

  }

}

