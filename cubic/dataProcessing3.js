let input1 = document.getElementById('a');
let input2 = document.getElementById('b');
let input3 = document.getElementById('c');
let input4 = document.getElementById('d');

let answers = document.querySelector('.answers dl');

const button = document.querySelector('.solveIt');

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