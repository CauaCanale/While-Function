function total (num, soma){
num = 1
soma = 0

while (num!=0){  
 num = parseInt (prompt("Digite um número."))  
   soma = num + soma
}
   alert("Resultado: " + soma) //A variavel "soma" é para aparecer a soma dos números digitados no "Prompt", A "soma" guarda o resultado dos numeros.
}
   total ()
