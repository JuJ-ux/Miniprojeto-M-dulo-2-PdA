const infos = {
nome: document.getElementById("nomeCliente"),
data: document.getElementById("dataCliente"),
email: document.getElementById("emailCliente"),
numero: document.getElementById("numCliente")
}
const botao= document.getElementById("botaoSub")
const spans= document.querySelectorAll(".span")

class NovaInfo {
    constructor (nomeCliente, dataCliente, emailCliente,numCliente){
        this.nomeCliente= nomeCliente;
        this.dataCliente= dataCliente;
        this.emailCliente= emailCliente;
        this.numCliente= numCliente;
    }
}

function mostrar(){
    spans[0].innerText= this.nomeCliente;
    spans[1].innerText= this.dataCliente;
    spans[2].innerText= this.emailCliente;
    spans[3].innerText= this.numCliente;
}

botao.addEventListener("click", () => {
    const novaInfo = new NovaInfo(
      infos.nome.value,
      infos.data.value,
      infos.email.value,
      infos.numero.value
    );
    novaInfo.mostrar();
});