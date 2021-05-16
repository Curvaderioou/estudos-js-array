const arr = [0, 1, 2]
console.log(arr)

const arr2 = new Array(1,2,3)
console.log(arr2)

const arr3 = Array.of(1,2,3)
console.log(arr3)

/*
pode-se criar tambem utilizando o Array(X), mas nesse caso se colocarmos apenas 1 parametro dentro, ele criará uma array com aquele numero de elementos, que ficaram vazios, conforme exemplo abaixo:
*/

// no caso abaixo criou 3 espaços vazios, pois isso ocorre quando temos um unico parametro
const arr4 = Array (3);
console.log(arr4)

// criou a array normalmente
const arr5 = Array (3,2)
console.log(arr5)
