function User (nome,email){
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function exibirInfos(){
       console.log(`${this.nome}, ${this.email}`)
    }
}

const marcela = new User('Marcela','m@m.com');
marcela.exibirInfos;