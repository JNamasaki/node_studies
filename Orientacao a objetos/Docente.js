import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = 'Docente', ativo = true){
        super(nome, email, nascimento, role, ativo );
    }
    aprovaEstudante(estudante,curso){
        return  `estudante ${estudante} aprovado no curso ${curso}`;
    }
}
const novoDocente = new Docente('Mariana','m@m.com','2023-01-01')
console.log(novoDocente.aprovaEstudante('Mariana',"Alemão"))