var atividades, index;

function adicionarTarefa(atividade, responsavel, dataInicial, dataFinal) {
    atividades = document.getElementById("tabAtividade");    
    var qtdlLinhas = atividades.rows.length;
    var linha = atividades.insertRow(qtdlLinhas);
    var linhaParam;

    var cellCodigo = linha.insertCell(0);
    var cellAtividade = linha.insertCell(1);
    var cellResponsavel = linha.insertCell(2);
    var celldataInicial = linha.insertCell(3);
    var cellDataFinal = linha.insertCell(4);

    cellCodigo.innerHTML = qtdlLinhas;
    cellAtividade.innerHTML = atividade;
    cellResponsavel.innerHTML = responsavel;
    celldataInicial.innerHTML = dataInicial;
    cellDataFinal.innerHTML = dataFinal;

    preencheCamposForm();
    limparCampos();
}

function altAtividade(atividade, responsavel, dataInicial, dataFinal) {

    atividades.rows[index].cells[1].innerHTML = atividade;
    atividades.rows[index].cells[2].innerHTML = responsavel;
    atividades.rows[index].cells[3].innerHTML = dataInicial;
    atividades.rows[index].cells[4].innerHTML = dataFinal;

    limparCampos();
}

function preencheCamposForm() {

    for(var i = 0; i < atividades.rows.length; i++) 
    {
        atividades.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("codigo").value = atividades.rows[index].cells[0].innerText;
            document.getElementById("atividade").value = atividades.rows[index].cells[1].innerText;
            document.getElementById("responsavel").value = atividades.rows[index].cells[2].innerText;
            document.getElementById("dataInicial").value = atividades.rows[index].cells[3].innerText;
            document.getElementById("dataFinal").value = atividades.rows[index].cells[4].innerText;
        }
    }
}

function delRegistro() {
   
    if(confirm("Você irá EXCLUIR o cadastro: " + atividades.rows[index].cells[1].innerText)){
    
        for(var i = 0; i < atividades.rows.length; i++) 
    	{
        	if (index == i) {
                    atividades.deleteRow(index);
                return;
            }
        	limparCampos();
    	}
        return true;
    }
    else{
    
        return false;   
    }
}

function limparCampos(){

    document.getElementById("form").reset();

}