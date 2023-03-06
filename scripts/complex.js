class Complex {
    constructor (a = 0, b = 0, accuracy = 5) {
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

        const module = Math.pow(number.Modulus, 1 / n);

        let initialArg = number.Arg / n;
        if (number.im == 0 & number.re == 0)
            initialArg = 0;
        
        for (var i = 0; i < n; i++) {
            answers[i] = new Complex(
                module * Math.cos(initialArg + 2 * Math.PI * i / n),
                module * Math.sin(initialArg + 2 * Math.PI * i / n)
            );
        }
        
        return answers;
    }

    pow(n) {
        if (this.re == 0 & this.im == 0)
            return new Complex();
        
        return new Complex(
            Math.pow(this.Modulus, n) * Math.cos(n * this.Arg),
            Math.pow(this.Modulus, n) * Math.sin(n * this.Arg)
        );
    }

    toString() {
        const re = parseFloat(parseFloat(this.re).toFixed(this.accuracy));
        const im = parseFloat(parseFloat(this.im).toFixed(this.accuracy));

        if (re == 0 & im == 0) {
            return "0";
        }
        if (im == 0) {
            return re.toString();
        }
        return re + " + i * " + im;
    }
}

function isNumber(char) {
    return /^\d$/.test(char);
}

function stringToComplex(s) {
    let re = "";
    let im = "";
    
    s = s.replace(/\s+/g, "");

    if (s[s.length-1] != "i") {
        return new Complex(Number(s));
    }

    if (!isNumber(s[0])) {
        if (s[0] == "i") {
            return new Complex(0, 1);
        }
        re += s[0];
        s = s.substring(1, s.length);

        if (s.length == 1) {
            return new Complex(0, -1);
        }
    }
    s = s.substring(0, s.length - 1);

    if (!isNumber(s[s.length - 1]))
        s += '1';
    
    const m = s.split(/[+-]/);

    re += m[0];
    im += (s.includes("+") ? "" : "-") + m[1];

    return new Complex(parseFloat(re), parseFloat(im));
}

/*console.log(stringToComplex("1 + 2i"), new Complex(1, 2))
console.log(stringToComplex("- 1 - 2i"), new Complex(-1, -2))
console.log(stringToComplex("-   1+ 2i  "), new Complex(-1, 2))
console.log(stringToComplex("1-   2i"), new Complex(1, -2))
console.log(stringToComplex("13+i  "), new Complex(13, 1))
console.log(stringToComplex("-134-i"), new Complex(-134, -1))
console.log(stringToComplex("0"), new Complex())
console.log(stringToComplex("-i"), new Complex(0, -1))
console.log(stringToComplex("i"), new Complex(0, 1))
console.log(stringToComplex("-23"), new Complex(-23))
console.log(stringToComplex("1345"), new Complex(1345))*/