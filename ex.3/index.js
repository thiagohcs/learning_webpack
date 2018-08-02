const product = {
    name: 'Caneta Bic Preta',
    price: 1.90,
    discount: 0.05
}

function clone(param) {
    return { ...param };
}

const newProduct = clone(product);
newProduct.name = 'Caneta Bic Azul';

console.log(product, newProduct);