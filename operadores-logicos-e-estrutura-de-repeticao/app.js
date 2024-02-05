const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart");
console.log("Além das suas verificações, precisamos verificar se você está na lista de presença de horário");


readLine.question("Qual o seu ano de nascimento? ", ano => {
    if (ano > 2006) {
        console.log("Você não tem 18 anos");
    } else {
        readLine.question("Você tem habilitação? (Sim/Nao) ", temHabilitacao => {
            if (!(temHabilitacao.toUpperCase() === "SIM")) {
                console.log("Você não tem habilitação para entrar no kart")
            } else {
                readLine.question("Qual seu nome? ", nome => {
                    switch (nome) {
                        case "Douglas":
                            console.log("Bem-vindo ao kart Douglas")
                            break;
                        case "Rafael":
                            console.log("Bem-vindo ao kart Rafael")
                            break;
                        default:
                            console.log("Seu nome não foi identificado na lista de presença")
                            break;
                    }
                })
            }
        })
    }

});