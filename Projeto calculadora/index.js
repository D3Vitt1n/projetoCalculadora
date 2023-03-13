function resultado(){
    let campo1 = Number(document.getElementById('campo-um').value)
    let campo2 = Number(document.getElementById('campo-dois').value)

    total = 0


    if(document.getElementById('caixa1').checked)
        total = campo1+campo2
    else if(document.getElementById('caixa2').checked)
        total = campo1-campo2
    else if(document.getElementById('caixa3').checked)
        total = campo1*campo2 
    else 
        total = campo1/campo2
        
    document.getElementById('resultadoArea').innerHTML = String(total)

    if(campo1 == "" || campo2 == "" ){
        document.getElementById('resultadoArea').innerHTML = String('Preencha os Campos!')
        
    }
     
    
    
}







