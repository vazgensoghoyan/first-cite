let input1 = document.getElementById('a');
let input2 = document.getElementById('b');
let input3 = document.getElementById('c');

let answers = document.querySelector('.answers dl');

const button = document.querySelector('.solveIt');


function solveEquation(a, b, c) {
    if (a === 0) {
        return 'Так нельзя!';
    }
    const d = b * b - 4 * a * c;
    if (d >= 0) {
        const x1 = (-b-Math.sqrt(d))/2;
        const x2 = (-b+Math.sqrt(d))/2
        return [x1, x2];
    }
    return null;
}

function printResult() {
    const ans = solveEquation(
        Number(input1.value),
        Number(input2.value),
        Number(input3.value)
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