import User from "./User.js"

class Admin extends User{
    constructor(nome, email, nascimento, role = 'Admin', ativo = true){
        super(nome, email, nascimento, role, ativo );
    }
    criarCurso(nomeCurso, vagas){
        return `Curso de ${nomeCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2023-01-30')
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos())

const novoCurso = novoAdmin.criarCurso('Alemão', 29); 
console.log(novoCurso); //Curso de Alemão criado com 29 vagas