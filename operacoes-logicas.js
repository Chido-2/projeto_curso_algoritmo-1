var nome, nota01, nota02, passou, passouParabens, recuperacao, reprovado;

passou = false;

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a primeira nota:")
nota02 = prompt("Digite a segunda nota:")

media = (parseInt (nota01) + parseInt(nota02)) / 2

if (media >= 5)
    passou = true;

if (passou && (media >= 7 && media <= 90))
    alert(nome + "Aprovado")
else 
    alert(nome + " reprovado")
