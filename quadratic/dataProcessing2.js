let input1 = document.getElementById('a');
let input2 = document.getElementById('b');
let input3 = document.getElementById('c');

let answers = document.querySelector('.answers dl');

const button = document.querySelector('.solveIt');

function printResult() {
    const ans = solveComplexEquation2(
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