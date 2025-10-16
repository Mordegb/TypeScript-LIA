//função de retorno simples
const soma = (n1: number , n2: number) => n1 + n2;
console.log(soma(1,4))

//função basica que vc com certeza ja sabe
function somar (n1: number , n2: number){
    return n1 + n2
}
console.log(somar(5,6))

//vc pode colocar valores padrão na função, mas quando fizer sua chamada pode alteralos se quiser
function mutavel( n1 = 6 , n2 = 4 ,n3 = 6){
    console.log(n1,n2,n3)
}
mutavel()
mutavel(1,2) //mudei os valores de n1 e n2 na chamada