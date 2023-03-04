class Complex {
    constructor (a, b) {
        this.im = parseFloat(a);
        this.re = parseFloat(b);
    }

    get Modulus() {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    }

    static sum() {
        let a = 0;

        for (var i = 0; i < arguments.length; i++) {
            a += arguments[i];
        }

        return a;
    }
}

const n1 = new Complex(3, 4);
console.log(n1.Modulus)