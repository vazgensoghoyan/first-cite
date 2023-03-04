class Complex {
    constructor (a, b) {
        this.re = parseFloat(a);
        this.im = parseFloat(b);
    }

    get Modulus() {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    }

    get Arg () {
        const atan = Math.atan(this.im / this.re);
        if (this.re >= 0) return atan;
        if (this.im <= 0) return atan - Math.PI;
        return atan + Math.PI;
    }

    static sum() {
        let a = 0;
        let b = 0;

        for (var i = 0; i < arguments.length; i++) {
            a += arguments[i].re;
            b += arguments[i].im;
        }

        return new Complex(a, b);
    }
}
