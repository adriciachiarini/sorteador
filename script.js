function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const resultDiv = document.getElementById('result');
    if (min >= max) {
        alert('O valor mínimo precisa ser menor que o valor máximo!')
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        resultDiv.textContent = `O número sorteado foi: ${result}`;
    }

}

let title = document.title;
let i = 0;

function scrollTitle() {
    document.title = title.substring(i) + " " + title.substring(0, i);
    i = (i + 1) % title.length;
    setTimeout(scrollTitle, 300);
}

scrollTitle();

