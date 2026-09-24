let nome = "Bruna";
console.log(nome);
nome = "Danielly";
console.log(nome);

const PI = 3.14;
console.log("Valor de PI", PI);
let eProfessor = true;
console.log(eProfessor);
eProfessor = false;
console.log(eProfessor);

let alunos = ["Juan", "Gabriel", "Uriel"];
console.log(alunos);
console.log(alunos[2]);

let aluno = {
    nome: "Joe",
    email: "joe@gmail.com",
    genero: "masculino",
}
console.log(aluno);
console.log(aluno.nome);
console.log(aluno.email);
console.log(aluno.genero);
console.log('Nome: ${aluno.nome}' );

let num = 0;
num = num + 2;
console.log(num);
num += 2;
console.log(num);

console.log("2+2" , 2+2);
console.log("2-2" , 2-2);
console.log("2*2" , 2*2);
console.log("2/2" , 2/2);
console.log("2+2=" , "dois"+"dois");

console.log("2 == 2: ", 2 == 2);
console.log("2 != 2: ", 2 != 2);
console.log("2 > 2: ", 2 > 2);
console.log("2 < 2: ", 2 < 2);
console.log("2 >= 2: ", 2 >= 2);
console.log("2 <= 2: ", 2 <= 2);
console.log("2 === 2: ", 2 === 2);

console.log(!true);
console.log(!false);

console.log("2 > 3 || 3 > 2: ", 2 > 3 || 3 > 2);
console.log("2 > 3 || 3 > 2: ", 2 > 3 || 3 > 2);

console.log("2 > 3 && 3 > 2: ", 2 > 3 && 3 > 2);
console.log("4 > 3 && 3 > 2: ", 4 > 3 && 3 > 2);
let root = document.querySelector('#root');
root.tinnerHTML = '<h1 onclick="alert("Clicou")">Ola Mundo</h1>';
root.tinnerHTML = "<h2>Oi</h2>";