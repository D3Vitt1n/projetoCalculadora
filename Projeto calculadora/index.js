// Criando função ao clicar no botão.
function resultado(){

    //Criação de 2 variveis para verificação do campo, pegando somente numeros.
    let campo1 = Number(document.getElementById('campo-um').value)
    let campo2 = Number(document.getElementById('campo-dois').value)

    //criando de variavel vazia
    total = 0

    //Criando condição para selecionar as caixas quando estiver selecionada, executar o calculo.
    if(document.getElementById('caixa1').checked)
        total = campo1+campo2
    else if(document.getElementById('caixa2').checked)
        total = campo1-campo2
    else if(document.getElementById('caixa3').checked)
        total = campo1*campo2 
    else 
        total = campo1/campo2
    

    //Pegando o id resultadoArea onde será mostrando no campo em html o resultado dos calculos.
    document.getElementById('resultadoArea').innerHTML = String(total)


    //Condição para verificação dos campos vazios.
    if(campo1 == "" || campo2 == "" ){
        document.getElementById('resultadoArea').innerHTML = String('Preencha os Campos!')
    }
     
    
    
}
