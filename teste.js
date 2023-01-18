const prompt = require('prompt-sync') ();

const propriedades = []

let condicional = false

const comando = () => {
    let propriedade = prompt("Digite uma propriedade de CSS: ");
    propriedades.push(propriedade)  
    return propriedade
    
}

const pergunta = () => {
    let opcao= prompt("Quer digitar uma propriedade [CONTINUAR/SAIR]? ").toUpperCase();
    switch(opcao) {
        case "SAIR":
        condicional = true
        propriedades.sort()
        console.log(propriedades)
        break
    case "CONTINUAR":
        condicional = false
        comando()
        break
    default:
        console.log("Opção inválida")
    }
    return opcao
}

comando()

while (!condicional){
    pergunta()
}