
interface Pessoa{ // interfaçe ou struct para simplificar
    nome:string
    idade:number
};
const listaPessoas:  Pessoa[] = [] //declara um array vazio

function addPessoa(array:Pessoa[] ,nome:string , idade: number):void{ //como passar o array numa função
    array.push({nome: nome , idade: idade})
}

function addPosicao(array:Pessoa[] , nome ='sem nome',idade = 20,indice = 2):void{
    let p1: Pessoa = {nome: nome,idade: idade};
    array.splice(indice,0,p1) //sintaxe : (indice pra adicionar ou remover,quantidade de coisas pra tirar,oq adicionar) 
}
listaPessoas.reverse() //reverte a ordem do array
//listaPessoas.every() //verifica se todas as condições que colocar dentro dele são verdaderias, retorna um booleano


listaPessoas.push({nome: 'cadu' , idade:18}) //adiciona algo ao final do array
listaPessoas.unshift({nome: 'daniel' , idade:99}) // adiciona algo ao inicio do array
addPessoa( listaPessoas,'leticia' , 18)
addPosicao(listaPessoas) // por falra de argumentos vai colocar usuario padrão na posição 2
addPosicao(listaPessoas,'giovana',18,3)// argumentos completos
console.clear()
console.log(listaPessoas)