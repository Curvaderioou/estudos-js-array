// o splice vai mudar a referencia do array, ou seja, não é imutavel.

// ele sempre retorna os itens removidos

const n = [1, 2, 3, 4, 5];

// o splice com 2 de parametro corta tudo a partir do parametro.
n.splice(2)
console.log(n);
/*
os parametros sao (a partir de onde inicia, quantos indices vai remove - se inserir 0 ele so add, o que vai adicionar)
*/
n.splice(0, 1, "first", "second", "three")
console.log(n)