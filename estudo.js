//alert("");
//console.log("");
//document.write("");

function total(){
    let valor = document.getElementById("val").value;
    let juros = document.getElementById("ju").value;
    let mes = document.getElementById("mes").value;

    if(!Number(valor)){
        alert("O valor deve ser um número.");

        document.getElementById("val").value ="";
        document.getElementById("val").focus();
        return
    }
    if(!Number(juros)){
        alert("Os juros deve ser um número.");

        document.getElementById("ju").value ="";
        document.getElementById("ju").focus();
        return
    }
    if(!Number(mes)){
        alert("Os meses devem ser um número.");

        document.getElementById("mes").value ="";
        document.getElementById("mes").focus();
        return
    }

    let resultado = 0;
    for(let i = 1; i <= mes; i++){
        resultado = valor * (1+(juros/100));
        valor = resultado;
        
    }

    document.write("O Resultado é " + resultado);
}
