import chalk from 'chalk';
import pegaArquivo from './index.js';
import fs from 'fs';


const caminho = process.argv;

function imprimeLista(resultado) {
    console.log(chalk.yellow('lista de links'), resultado)
}

async function processaTexto(args) {
    const caminho = args[2]

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        console.log(chalk.yellowBright('Lista de Links'), resultado);
        imprimeLista(resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);

        arquivos.forEach(async(nomeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
            imprimeLista(lista);
        })

    }


}


processaTexto(caminho);