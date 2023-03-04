class Complex {
    constructor (a, b) {
        this.re = a;
        this.im = b;
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
        const accuracy = 5;
        return parseFloat(this.re.toFixed(accuracy)) + " + i * " + parseFloat(this.im.toFixed(accuracy));
    }
}


let input1 = document.getElementById('a');
let input2 = document.getElementById('b');
let input3 = document.getElementById('c');
let input4 = document.getElementById('d');

let answers = document.querySelector('.answers dl');

const button = document.querySelector('.solveIt');

function solveComplexEquation2(a, b, c) {
    const A = b / a;
    const B = c / a;
    
    let ans = Complex.takeRoot(new Complex(A * A / 4 - B, 0), 2);

    for (var i = 0; i < ans.length; i++) {
        ans[i] = Complex.sum(ans[i], new Complex(A / 2, 0).min());
    }
    
    return ans;
}

function solveComplexEquation3(a, b, c, d) {
    const A = b / a;
    const B = c / a;
    const C = d / a;

    const p = (3 * B - A * A) / 3;
    const q = (2 * A * A * A - 9 * A * B + 27 * C) / 27;
    const shift = - A / 3;
    
    const s = solveComplexEquation2(27, 27 * q, - p * p * p);
    if (s[0].re == 0 & s[0].im == 0 & s[1].re == 0 & s[1].im == 0) {
        return [shift, shift, shift];
    }

    let z;
    if (s[0].re == 0 & s[0].im == 0) {
        z = s[1];
    } else {
        z = s[0];
    }
    const f = Complex.takeRoot(z, 3);

    let answers = [];
    for (var i = 0; i < f.length; i++) {
        answers[i] = Complex.sum(f[i], Complex.div(new Complex(p, 0), Complex.mult(new Complex(3, 0), f[i])).min(), new Complex(shift, 0));
    }
    
    return answers;
}

function printResult() {
    const ans = solveComplexEquation3(
        Number(input1.value),
        Number(input2.value),
        Number(input3.value),
        Number(input4.value)
    );

    let html = '';
    
    let index = 0;

    ans.forEach(i => {
        index++;
        html += '<dt>x' + index + '</dt>'
        html += '<dd>' + i + '</dd>';
    })
    
    answers.innerHTML = html;
}

button.addEventListener('click', printResult);

console.log(solveComplexEquation3(1, 1, 1, 1));