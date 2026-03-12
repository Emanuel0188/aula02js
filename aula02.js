console.log("\n== 1) Tipos primitivos ==");

const texto = "ola";
const numero = 10;
const ativo = true;
let indefinido;
const nulo = null;
const grande = 12345678901234567890n;
const simb = Symbol("id");

console.log(typeof texto); // string
console.log(typeof numero); // number
console.log(typeof ativo); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object (bug histórico do JS)
console.log(typeof grande); // bigint
console.log(typeof simb); // symbol



console.log("\n== 2) BigInt e Symbol ==");

const numGrande = 999999999999999999999n;

console.log(numGrande); // 999999999999999999999n
console.log(typeof numGrande); // bigint

const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2); // false
console.log(typeof s1); // symbol



console.log("\n== 3) Operadores matemáticos, lógicos e comparação ==");

// matemáticos
console.log(5 + 5); // 10
console.log(6 * 2); // 12

// lógicos
console.log(true && false); // false
console.log(true || false); // true

// comparação
console.log(7 > 3); // true
console.log(10 == "10"); // true
console.log(10 === "10"); // false



console.log("\n== 4) Concatenação e conversão dinâmica ==");

console.log(2 + "2"); // "22"
console.log(2 + (+"2")); // 4
console.log("ola " + "mundo"); // "ola mundo"



console.log("\n== 5) Escopo léxico e blocos {} ==");

// bloco simples
{
  const dentro = "ok";
  console.log(dentro); // ok
}
// console.log(dentro); // erro fora do bloco

// de dentro para fora
if (true) {
  const a = 10;
  let b = 20;

  console.log(a); // 10
  console.log(b); // 20
}
// console.log(a); // erro
// console.log(b); // erro

// de fora para dentro
const fora = "variavel externa";

if (true) {
  console.log(fora); // variavel externa
}

// var vazando do bloco
if (true) {
  var teste = "var saiu do bloco";
}

console.log(teste); // var saiu do bloco



console.log("\n== 6) Shadowing com const ==");

const bloco = "valor";

if (true) {

  console.log(bloco); // valor

  {
    const bloco = "outro valor";
    console.log(bloco); // outro valor
  }

  console.log(bloco); // valor
}

console.log(bloco); // valor



console.log("\n== 7) Imutabilidade ==");

let palavra = "javascript";

palavra.toUpperCase();
console.log(palavra); // javascript

palavra = palavra.toUpperCase();
console.log(palavra); // JAVASCRIPT



console.log("\n== 8) Assincronismo com setTimeout ==");

console.log("setTimeout entra na fila e roda depois do código atual");

console.log("A"); // A

setTimeout(() => {
  console.log("B"); // B
}, 0);

console.log("C"); // C

// ordem real: A -> C -> B


setTimeout(() => {
  console.log("timeout 0"); // timeout 0
}, 0);

setTimeout(() => {
  console.log("timeout 100"); // timeout 100
}, 100);

// ordem: timeout 0 depois timeout 100