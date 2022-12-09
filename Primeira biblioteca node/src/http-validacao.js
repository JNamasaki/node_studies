import chalk from "chalk";

function extraLinks(arrLinks) {
    return arrLinks.map((objetoLink) =>
        Object.values(objetoLink).join()
    )
}

async function checaStatus(listaUrls) {

    const arrStatus = await Promise.all(
        listaUrls.map(async(url) => {
            try {
                const response = await fetch(url);
                return response.status;
            } catch (e) {
                if (e.cause.code === 'ENOTFOUND') {
                    manejaErros(e);
                } else {
                    return console.log(`ocorre algum erro: ${e.cause.code}`)
                }
            }
        })
    );

    return arrStatus
}

function manejaErros(erro) {
    console.log(chalk.red('algo deu errado!'), erro);
    return
}
export default async function listaValidada(listaDeLinks) {
    const links = extraLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((obj, index) => ({
        ...obj,
        status: status[index]
    }))

}