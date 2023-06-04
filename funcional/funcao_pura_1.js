// Uma função pura é uma função em que o valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterais observáveis

const PI = 3.14;
// IMPURA PORQUE PI É UM VALOR EXTERNO, OU SEJA ELA DEPENDE DE ALGO QUE ESTÁ FORA DELA
// PARA CALCULAR A FUNÇÃO PRECISOU DE ALGO FORA DELA PARA RETORNAR OS VALORES
function areaCircle(radius) {
    return radius * radius * PI;
}

console.log(areaCircle(10));

// FUNCAO PURA
// ELA SÓ DEPENDE DOS SEUS VALORES DE ENTRADA PARA DEFINIR SEUS VALORES DE RETORNO
function areaCirclePure(radius, pi) {
    return radius * radius * pi;
}

console.log(areaCirclePure(10, Math.PI));
