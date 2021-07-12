let nomes = ['Carlinhos', 'peneopy', 'Marcio', 'Joao'];

function add(nomes,...novosNomes)  {

let newCon = [
...nomes,
...novosNomes

];


return newCon;
}
let outros = adicionar(nomes, 'Pedrinnho', 'Mariazinha', 'Serginho');
console.log(outros);