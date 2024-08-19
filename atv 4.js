cont = 10

a = 0
b = 1
i = 0 

console.log("Sequência de Fibonacci:");

while (i < cont) {
    console.log(a);  
    proximo = a + b;  
    a = b;  
    b = proximo;  
    i++;  
}