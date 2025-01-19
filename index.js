

function outcome() {

//---------- Atribui os valores digitados pelo usuário às variáveis N1 e N2, transformando-os de text para number
    let N1 = Number(document.getElementById('num-one').value)
    let N2 = Number(document.getElementById('num-two').value)
    let TOTAL = 0

//---------- Verifica se cada um dos 'box' está assinalado
    if (document.getElementById('box1').checked)
        TOTAL = N1 + N2
    else if (document.getElementById('box2').checked)
        TOTAL = N1 - N2
    else if (document.getElementById('box3').checked) 
        TOTAL = N1 * N2
    else if (document.getElementById('box4').checked)
        TOTAL = N1 / N2

//---------- Imprime o resultado na execução do id 'resultArea'
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(TOTAL)
}