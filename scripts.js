// selecionar os elementos para trabalhar com DOM capsulando em variáveis do converso de unidades
const inputElement = document.querySelector('#input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn');
const messageElement = document.querySelector('#message');

// Função para converter as unidades

function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = '';
        return;
    }

    //converter todas as entradas para metro
    let meters
    switch (fromValue) {
        case 'm':
            meters = inputElement.value;            
            break;
        case 'km':
            meters = inputElement.value * 1000;
            break;
        case 'cm':
            meters = inputElement.value / 100;
            break;
        case 'mm':
            meters = inputElement.value / 1000;
            break;
    }

    // Converter metros para unidade de saída
    let result;
    switch(toValue){
        case 'm':
            result = meters;
            break;
        case 'km':
            result = meters / 1000;
            break;
        case 'cm':
            result = meters * 100;
            break;
        case 'mm':
            result = meters * 1000;
            break;
    }
    // exibir resultado no input
    outputElement.value = result;

    // exibir resultado na mesagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} equevalem a ${result} ${toLabel}`;
    messageElement.textContent = message;

    return;
}

convertButton.addEventListener('click', convert);

// selecionar os elementos para trabalhar com DOM capsulando em variáveis do converso de unidades
const input2Element = document.querySelector('#input2');
const from2Element = document.querySelector('#from2');
const to2Element = document.querySelector('#to2');
const output2Element = document.querySelector('#output2');
const convert2Button = document.querySelector('#convert-btn2');
const message2Element = document.querySelector('#message2');

// Função para converter as unidades da hora

function converthora(){
    const fromValueH = from2Element.value;
    const toValueH = to2Element.value;

    if(fromValueH === toValueH){
        output2Element.value = input2Element.value;
        message2Element.textContent = '';
        return;
    }

    //converter todas as entradas para hora
    let horas;
    switch (fromValueH) {
        case 'h':
            horas = input2Element.value;            
            break;
        case 'min':
            horas = input2Element.value / 60;
            break;
        case 's':
            horas = input2Element.value / 3600;
            break;
    }

    // Converter horas para unidade de saída
    let result_hora;
    switch(toValueH){
        case 'h':
            result_hora = horas;
            break;
        case 'min':
            result_hora = horas * 60;
            break;
        case 's':
            result_hora = horas * 3600;
            break;
    }
    // exibir resultado no input
    output2Element.value = result_hora;

    // exibir resultado na mesagem
    const fromLabelH = from2Element.options[from2Element.selectedIndex].text;
    const toLabelH = to2Element.options[to2Element.selectedIndex].text;

    const message2 = `${input2Element.value} ${fromLabelH} equevalem a ${result_hora} ${toLabelH}`;
    message2Element.textContent = message2;

    return;    

}

convert2Button.addEventListener('click', converthora);