const infos = {
    nome: document.getElementById("nomeCliente"),
    data: document.getElementById("dataCliente"),
    email: document.getElementById("emailCliente"),
    };

const lista =document.getElementById("list");
const btn= document.getElementById("btn");


let informacoes = [];

function validar(){  

if (infos.nome.value ==="" || infos.data.value === ""|| infos.email.value ===""){
        alert("Todos os campos precisam ser preenchidos");
        return;
    }

 const novoDado={
nome: infos.nome.value,
data: infos.data.value,
email: infos.email.value,
 }

adicionar(); 

informacoes.push(novoDado)
}

function adicionar() {
lista.innerHTML="";

informacoes.forEach((dado,index) =>{

  const item = document.createElement("li");
  item.textContent = `${dado.nome}| ${dado.data} | ${dado.email}`
    
  const btnExcluir = document.createElement("button")
  btnExcluir.textContent = "Excluir";

  btnExcluir.onclick = () => excluir (index)

  btnExcluir.classList.add("btnExcluir")

  item.appendChild(btnExcluir);

  lista.appendChild (item)
});
}

function excluir (index){

    informacoes.splice(index,1);

    adicionar()
}
btn.addEventListener("click", validar);