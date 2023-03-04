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
        answers[i] = Complex.add(f[i], Complex.div(new Complex(p, 0), Complex.mult(new Complex(3, 0), f[i])), new Complex(shift, 0));
    }
    
    return ans;
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