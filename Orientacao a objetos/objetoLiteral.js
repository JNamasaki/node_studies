const user = {
    nome: 'Jessica',
    email:'j@j.com',
    nascimento: '2023/01/01',
    role:'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.email)
    }
}



// herança de prototipo
//  THIS é muito importante

// Aula 2

// user.exibirInfos();
// // const exibir = user.exibirInfos;
// // exibir();

// const exibir = function() {
//     console.log(this.nome)
// }
// exibir()
// const exibirNome = exibir.bind(user)
// exibirNome()

// Aula 3

const admin = {
    nome: 'Mariana',
    email:'m@j.com',
    nascimento: '2023/01/01',
    role:'admin',
    ativo: true,
criarCurso(){
    console.log('curso criado!')
}
}
Object.setPrototypeOf(admin,user)
admin.criarCurso()
admin.exibirInfos()