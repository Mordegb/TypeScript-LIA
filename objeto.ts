class pessoa {
    //propriedades / instancias
    nome: string;
    idade: number;
    genero: string;

    constructor(nome = 'generico' , idade = 18 , genero = 'indefinido'){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero
    }

    setIdade(genero:string):void{
        this.genero = this.genero
    } 

    //métodos
    apresentacao(): void{
        console.log(`ola meu nome é ${this.nome} e tenho ${this.idade}`);
    }

    getIdade():number{
        return this.idade;
    }




}

const cadu = new pessoa('Cadu' , 18);
console.log(cadu.genero)
cadu.apresentacao()
console.log(cadu.getIdade())