# Trabalho-Individual-Modulo-5

Aqui irei explicar um pouco do processo e o passo a passo que fiz para construir esse simples programa.

1° primeiramente eu instalei um pacote chamado prompt-sync, ele tem como objetivo
deixar o programa mais intuitivo e mais fácil de se conseguir gerar e armazenar o input em uma variável
que por sinal fica bem similar a python.

2º A primeira coisa que fiz foi criar um array que será responsável por armazenar
as propriedades de css que foram dadas pelo usuário.

3º logo após criei uma váriavel chamada escolha que tem como padrão false e ela servirá
como a condicional para fazer com que o laço de repetição funcione.

4º dentro da estrutura de repetição criei dois inputs, um para pedir que o usuário 
escreva uma propriédade de sua escolha e outro para que ele possa optar entre
continuar adicionando mais propriedades ou sair do programa. sempre que o mesmo
adicionar uma propriedade ela será adicionada ao array.

5º aqui criei uma condicional, que caso o usuário opte por sair do programa ele só precisaria
escrever SAIR para que o mesmo aconteça, assim que esta condição for comprida a variavel escolha
passaria a possuir o valor true assim fazendo o laço parar.

6º por ultimo como exigido pelo exercício após o fechamento do programa as propriedades
armazenadas no array seria expostas na tela em ordem alfabética com o proposito de facilitar
a localização de alguma propriedade adicionada.
