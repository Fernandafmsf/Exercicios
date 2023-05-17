  //Criar um programa que leia o valor de um jantar, calcule taxa de 10% do garçom e exiba o total 

    const valorJantar = Number(prompt('Digite o valor do jantar: '));
    const taxa= valorJantar* 0.10;
    const total = taxa + valorJantar; 

    alert(` Valor do Jantar:R$ ${valorJantar.toFixed(2)}.\n A taxa do garçom foi:R$ ${taxa.toFixed(2)}.\n O valor total do Jantar foi:R$ ${total.toFixed(2)}`);