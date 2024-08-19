function soma_ate_100 (numero, soma){
    numero = 1
    soma = 0
    
    while (numero <= 100) {
       soma += numero
       numero++
    } 
    return soma
    }
    console.log ("A soma do numero até 100 é:" + soma_ate_100())