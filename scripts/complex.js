class Complex {
    constructor (a, b, accuracy = 5) {
        this.re = a;
        this.im = b;

        this.accuracy = accuracy;
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
        let re = 0;
        let im = 0;

        for (var i = 0; i < arguments.length; i++) {
            re += arguments[i].re;
            im += arguments[i].im;
        }

        return new Complex(re, im);
    }

    static mult(n1, n2) {
        return new Complex(n1.re * n2.re - n1.im * n2.im,
                        n1.im * n2.re + n1.re * n2.im);
    }

    static div(n1, n2) {
        const a = n2.Modulus * n2.Modulus;

        return new Complex((n1.re * n2.re + n1.im * n2.im) / a,
                        (n1.im * n2.re - n1.re * n2.im) / a);
    }

    min() {
        return new Complex(-this.re, -this.im);
    }

    static takeRoot(number, n) {
        let answers = [];
        let module = Math.pow(number.Modulus, 1 / n);
        let initialArg = number.Arg / n;
        if (number.im == 0 & number.re == 0) {
            initialArg = 0;
        }
        for (var i = 0; i < n; i++) {
            answers[i] = new Complex(
                module * Math.cos(initialArg + 2 * Math.PI * i / n),
                module * Math.sin(initialArg + 2 * Math.PI * i / n)
            );
        }
        return answers;
    }

    pow(n) {
        return new Complex(
            Math.pow(this.Modulus, n) * Math.cos(n * this.Arg),
            Math.pow(this.Modulus, n) * Math.sin(n * this.Arg)
        );
    }

    toString() {
        const re = parseFloat(this.re.toFixed(this.accuracy));
        const im = parseFloat(this.im.toFixed(this.accuracy));

        if (re == 0 & im == 0) {
            return "0";
        }
        if (im == 0) {
            return re.toString();
        }
        return re + " + i * " + im;
    }
}
