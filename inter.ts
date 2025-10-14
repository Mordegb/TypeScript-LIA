

interface Usuario { //basicamente struct ou objeto
  id: number;
  nome: string;
  email: string;
  telefone?: string; // A interrogação (?) torna a propriedade opcional
  ocupacao?: string;
}


function exibirBoasVindas(usuario: Usuario) {
  console.log(`Bem-vindo, ${usuario.nome} vc agora é um ${usuario.ocupacao}!`);
}

const meuUsuario: Usuario = {
  id: 1,
  nome: "Alice",
  email: "alice@exemplo.com"
};


const outroUsuario: Usuario = {
  id: 2,
  nome: "cadu",
  email: "beto@exemplo.com",
  telefone: "85999998888",
  ocupacao: "aluno"
};

exibirBoasVindas(outroUsuario); // Funciona perfeitamente