const infos = {
nome: document.getElementById("nomeCliente"),
data: document.getElementById("dataCliente"),
email: document.getElementById("emailCliente"),
numero: document.getElementById("numCliente")
};
const botao= document.getElementById("btn1")
const spans= document.querySelectorAll(".span")
const btnDelete= document.getElementById("btn2") 

class NovaInfo {
    constructor (nomeCliente, dataCliente, emailCliente,numCliente){
        this.nomeCliente= nomeCliente;
        this.dataCliente= dataCliente;
        this.emailCliente= emailCliente;
        this.numCliente= numCliente;
    }
mostrar(){
    spans[0].innerText= this.nomeCliente;
    spans[1].innerText= this.dataCliente;
    spans[2].innerText= this.emailCliente;
    spans[3].innerText= this.numCliente;
}

exluir(){
    spans.forEach(span=> span.innerText="")
}
}
// eventos para adicionar a informação e deletá-las
botao.addEventListener("click", () => {
    const novaInfo = new NovaInfo(
      infos.nome.value,
      infos.data.value,
      infos.email.value,
      infos.numero.value
    );
    novaInfo.mostrar();
});

btnDelete.addEventListener("click",()=>{
    const novaInfo=new NovaInfo();
    novaInfo.exluir();
});