const propriedades = []

const prompt = require('prompt-sync') ();


console.log("Escreva uma propriedade de css")

let escolha = false

while (!escolha) {
  let propriedade = prompt('Escreva uma propriedade: ')
    propriedades.push(propriedade)

  let opcao = prompt('Quer continuar [S/SAIR]? ').toUpperCase()

  if (opcao === 'SAIR') {
    console.log('fechando o programa...')
    let ordemAlfabetica = propriedades.sort();
    console.log(ordemAlfabetica)
    escolha = true;
  }
}
