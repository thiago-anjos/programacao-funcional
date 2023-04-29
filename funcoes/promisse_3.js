function gerarNumeros(min, max) {
    if (min > max) {
        let a = [min, max]; // criou um array
        const [x, y] = a; // quando os colchetes estão do lado direito, vc está atribuindo valores a eles, nesse caso, ele atribuiu os valores do array a, nas constantes do lado direito

        // criar array, atribuir os valores ao lado esquerdo.
        [max, min] = [min, max];
    }
    return new Promisse((resolve) => {
        resolve(7);
    });
}
