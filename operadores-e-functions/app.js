const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if (!resultado) {
        console.log("Numero informado não é válido");
    }
    return resultado;
}

const validaOperadorInformado = (operador) => {
    switch (operador) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            return operador;
        default:
            console.log("Operador informado não é válido");
            return null;
    }
}

readLine.question("Informe um número: ", numero1 => {
    const number = validarNumeroInformado(numero1);
    if (number) {
        readLine.question("Informe outro número: ", numero2 => {
            const number2 = validarNumeroInformado(numero2);
            if (number2) {
                readLine.question("Informe o operador: ", operador => {
                    const validOperator = validaOperadorInformado(operador);
                    if (validOperator) {
                        switch (validOperator) {
                            case '+':
                                console.log(`Operador selecionado adição :  ${number} + ${number2} = ${number + number2}`);
                                break;
                            case '-':
                                console.log(`Operador selecionado subtração :  ${number} - ${number2} = ${number - number2}`);
                                break;
                            case '/':
                                console.log(`Operador selecionado divisão :  ${number} / ${number2} = ${number / number2}`);
                                break;
                            case '*':
                                console.log(`Operador selecioado multiplicação :  ${number} * ${number2} = ${number * number2}`);
                            case '%':
                                console.log(`Operador selecioado módulo :  ${number} % ${number2} = ${number % number2}`);
                                break;

                            default:
                                break;
                        }
                    }
                });
            }
        });
    }
});
