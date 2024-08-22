//INICIO DO JS DE TREINAMENTO



// Solicitar um dado do tipo texto
const nome = prompt("Por favor, insira seu nome:");

// Exibir saudação com o nome fornecido
console.log("Olá, " + nome + "! Seja bem-vindo(a)!");

// Solicitar um dado numérico
const numeroUsuario = prompt("Por favor, insira um número:");

// Parsear o dado numérico
const numeroConvertido = parseInt(numeroUsuario);

// Soma o número do usuário com outro número armazenado em uma variável
const numeroArmazenado = 10;
const resultadoSoma = numeroConvertido + numeroArmazenado;

// Exibir o resultado da soma
console.log("A soma do seu número com 10 é: " + resultadoSoma);

// Solicitar mais dois textos
const texto1 = prompt("Digite o primeiro texto:");
const texto2 = prompt("Digite o segundo texto:");

// Concatenar os dois textos
const textoConcatenado = texto1 + " " + texto2;

// Exibir o resultado da concatenação em um alert
alert("O texto concatenado é: " + textoConcatenado);

//FIM DO JS DE TREINAMENTO