
// os 3 tipos de variaveis:
let nome: string = "cadu";
let idade: number = 18; //number serve para numeros inteiros e flutuantes.
let vivo: boolean = true;
//a palvra chave (let) é usada pra declara uma variavel que pode ser mudada depois


//o console log pode imprimir numeros, variaveis e strings
console.clear() //limpa o terminal, liretalmente so isso. é irritantemente facil
console.log(idade); 
console.log(22);
console.log("mensagem generica");

//criar listas e arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: Array<string> = ["Maria", "José", "Ana"];

//print formatado
console.log(`O nome do usuário é ${nome} e sua idade é ${idade} anos.`);
console.log("ola minha idade é", idade , "e tenho" ,nome, "anos")
//colocar (tsc nome_do_arquivo.ts) no terminal, vai compilar o codigo e transformar ele em typ scrypt


