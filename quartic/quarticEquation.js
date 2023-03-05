function solveComplexEquation4(a, b, c, d, e) {
    const A = b / a;
    const B = c / a;
    const C = d / a;
    const D = e / a;

    const m = (8 * B - 3 * A * A) / 8;
    const n = (8 * C - 4 * A * B + A * A * A) / 8;
    const p = (16 * B * A * A + 256 * D - 64 * A * C - 3 * A * A * A * A) / 256;
    const shift = -A / 4;
    
    if (m == 0 & n == 0 & p == 0) {
        return [new Complex(shift), new Complex(shift), new Complex(shift), new Complex(shift)];
    }

    const cubicAnswers = solveComplexEquation3(1, m, (m * m - 4 * p) / 4, -n * n / 8);

    let t = 0;
    for (var  i = 0; i < cubicAnswers.length; i++) {
        if (i != 0) {
            t = i;
            break;
        }
    }

    const s = Complex.takeRoot(new Complex(2 * t, 0), 2)[0];
    
    ///////////////////////

    let answers = [];
    for (var i = 0; i < f.length; i++) {
        answers[i] = Complex.sum(f[i], Complex.div(new Complex(p, 0), Complex.mult(new Complex(3, 0), f[i])).min(), new Complex(shift, 0));
    }
    
    return answers;
}