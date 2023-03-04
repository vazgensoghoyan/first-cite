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
        return this.re + " + i * " + this.im;
    }
}


let input1 = document.getElementById('a');
let input2 = document.getElementById('b');
let input3 = document.getElementById('c');

let answers = document.querySelector('.answers dl');

const button = document.querySelector('.solveIt');


function solveEquation(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d >= 0 & a != 0) {
        const x1 = (-b-Math.sqrt(d))/2/a;
        const x2 = (-b+Math.sqrt(d))/2/a;
        return [x1, x2];
    }
    return null;
}

function solveComplexEquation(a, b, c) {
    const A = b / a;
    const B = c / a;
    let ans = Complex.takeRoot(new Complex(A * A / 4 - B, 0), 2);
    console.log(ans);
    for (var i = 0; i < ans.length; i++) {
        ans[i] = Complex.sum(ans[i], new Complex(A / 2, 0).min());
    }
    return ans;
}

function printResult() {
    const ans = solveComplexEquation(
        Number(input1.value),
        Number(input2.value),
        Number(input3.value)
    );

    let html = '';
    
    if (ans != null) {
        let index = 0;

        ans.forEach(i => {
            index++;
            html += '<dt>x' + index + '</dt>'
            html += '<dd>' + i + '</dd>';
        })
    } else {
        html = '<p>Что-то пошло не так!</p>'
    }
    
    
    answers.innerHTML = html;
}

button.addEventListener('click', printResult);

console.log(solveComplexEquation(1, 1, 1));