try {
    const listaProdutosDisponiveis = [
        'Pao',
        'Leite',
        'Cafe',
        'Laranja',
        'Macarrao',
        'Sabonete',
        'Detergente',
    ];

    const listaArgumentos = process.argv.slice(2);

    const listaProdutosSolicitadosDisponiveis = listaProdutosDisponiveis.filter(produto => listaArgumentos.find(arg => arg.toUpperCase() === produto.toUpperCase()));
    listaProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos ${produto}`));


    const listaProdutosSolicitadosNaoDisponiveis = listaArgumentos.filter(arg => !listaProdutosDisponiveis.find(produto => produto.toUpperCase() === arg.toUpperCase()));
    listaProdutosSolicitadosNaoDisponiveis.forEach(produto => console.log(`Este produto nos não temos ${produto}`));


    listaProdutosDisponiveis.sort();
    listaProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponível ${produto}`));
} catch (e) {
    console.log("Não foi possível executar pedido de compra");
}

