// O slice não muda o valor da mesma array, e sim manipula os valores para uma nova array, imutabilidade


const numbers = [1, 2, 3, 4, 5]

/*
ele pega como parametro onde começa e onde termina, lembrando que ele nao vai ate o limite, entao nesse caso os numeros ficam sendo 1 e 2, o 3 é o indice limite que ele nao vai pegar.
*/ 
console.log(numbers.slice(0, 2));

// ele pega a partir do 2 indice do array, no caso, 3, 4 e o 5 lembrando que o indice inicia do 0
console.log(numbers.slice(2));

// ele pega o -1 que que nesse caso vai ser o ultimo número, o 5.
console.log(numbers.slice(-1));

// ele pega o tres numero de tras para frente, nesse caso o 5, 4 e 3.
console.log(numbers.slice(-3))
