function solveComplexEquation2(a, b, c) {
    const A = b / a;
    const B = c / a;
    
    let ans = Complex.takeRoot(new Complex(A * A / 4 - B, 0), 2);

    for (var i = 0; i < ans.length; i++) {
        ans[i] = Complex.sum(ans[i], new Complex(A / 2, 0).min());
    }
    
    return ans;
}