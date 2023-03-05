function solveComplexEquation3(a, b, c, d) {
    const A = b / a;
    const B = c / a;
    const C = d / a;

    const p = (3 * B - A * A) / 3;
    const q = (2 * A * A * A - 9 * A * B + 27 * C) / 27;
    const shift = - A / 3;
    
    const s = solveComplexEquation2(27, 27 * q, - p * p * p);
    if (s[0].re == 0 & s[0].im == 0 & s[1].re == 0 & s[1].im == 0) {
        return [new Complex(shift), new Complex(shift), new Complex(shift)];
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