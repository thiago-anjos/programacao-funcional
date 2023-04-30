// função construtora

function Product(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;

    this.lastPrice = () => {
        let discountValue = this.price * (this.discount / 100);
        return this.price - discountValue;
    };
}

const p1 = new Product("Caneta", 17, 10);
console.log(p1.name);
console.log(p1.lastPrice());

// ========================== classe

class Product2 {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    lastPrice = () => {
        let discount = this.price * (this.discount / 100);
        return this.price - discount;
    };

    get discountValue() {
        return this.price * (this.discount / 100);
    }
}

const p2 = new Product2("Caneta", 17, 10);
console.log(p2.name);
console.log(p2.lastPrice());
console.log(p2.discountValue); // posso chamar o metodo discount sem o () porque eu coloquei o get na frente
