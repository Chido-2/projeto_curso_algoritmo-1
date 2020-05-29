function acaoBotao() {
    var nome, idade, limite, contador

    limite = prompt("Digite a quantidade de testes a serem feitos: ")
    contador = 0
    while (contador < limite){
        nome = prompt("Insira o nome da pessoa:")
        idade = prompt ("Digite a idade de " + nome + ":")
        console.log(idade)
        if (idade > 18)
            document.getElementById("paragrafo").innerText = nome + ", você é maior de idade!"
        else 
            document.getElementById("paragrafo").innerText = nome + ", você é menor de idade!"
        contador++
    }
}   