let input1 = document.getElementById('a');
let input2 = document.getElementById('b');
let input3 = document.getElementById('c');

let answers = document.querySelector('.answers dl');

const button = document.querySelector('.solveIt');

function printResult() {
    const ans = solveComplexEquation2(
        stringToComplex(input1.value),
        stringToComplex(input2.value),
        stringToComplex(input3.value)
    );

    let html = '';
    
    if (ans != null) {
        let index = 0;

        ans.forEach(i => {
            index++;
            html += '<dt>x' + index + '</dt>'
            html += '<dd>' + new Complex(i.re, i.im, 10) + '</dd>';
        })
    } else {
        html = '<p>Что-то пошло не так!</p>'
    }
    
    
    answers.innerHTML = html;
}

button.addEventListener('click', printResult);
