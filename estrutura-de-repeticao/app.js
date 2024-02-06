const listaArgumentos = process.argv.slice(2);

console.log("------------------------- Executando um for -------------------------")

for (let i = 0; i < listaArgumentos.length; i++) {
    console.log(`Posição ${i} valor lido = ${listaArgumentos[i]}`);
}

console.log("------------------------- Executando um while -------------------------")
let i = 0;
while (i < listaArgumentos.length) {
    console.log(`Posição ${i} valor lido = ${listaArgumentos[i]}`);
    i++;
}


console.log("------------------------- Executando um do while -------------------------")

i = 0;
do {
    console.log(`Posição ${i} valor lido = ${listaArgumentos[i]}`);
    i++;
} while (i < listaArgumentos.length);

console.log("------------------------- Executando um for of -------------------------")
for (const arg of listaArgumentos) {
    console.log(`Valor lido = ${arg}`);
}

