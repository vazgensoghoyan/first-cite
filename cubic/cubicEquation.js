function solveComplexEquation3(a, b, c, d) {
    const A = Complex.div(b, a);
    const B = Complex.div(c, a);
    const C = Complex.div(d, a);

    const p = Complex.sum(B, Complex.div(A.pow(2), new Complex(-3)));
    const q = Complex.sum(
        C,
        Complex.div(Complex.mult(A, B),  new Complex(-3)), 
        Complex.div(A.pow(3), new Complex(27/2))
    );
    const shift = Complex.div(A, new Complex(-3));
    
    const s = solveComplexdEquation2(new Complex(27), Complex.mult(new Complex(27), q), p.pow(3).min());
    
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
        answers[i] = Complex.sum(f[i], Complex.div(new Complex(p, 0), Complex.mult(new Complex(3, 0), f[i])).min(), shift);
    }
    
    return answers;
}
