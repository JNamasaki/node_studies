export default class User {
    #nome ;
    #email ; 
    #nascimento;
    #role ;
    #ativo ;

    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email  = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }
    exibirInfos(){
        return `${this.#nome}, ${this.#email}`
    }
    #montaObjUser(){
        return(
            {
                nome  :this.#nome ,
                email :this.#email ,
                nascimento :this.#nascimento ,
                role : this.#role,
               ativo  : this.#ativo 
            }
        )
    }
}

// const novoUser = new User('Juliana', 'j@j.com', '2021-01-01')
// console.log(novoUser);
// console.log(novoUser.exibirInfos()) // Juliana, j@j.com

// console.log(User.prototype.isPrototypeOf(novoUser)) //true