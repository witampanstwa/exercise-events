const paragraphElement = document.getElementById('paragraph');

const originalBorder = paragraphElement.style.border;

function restoreBorder() {
    paragraphElement.style.border = originalBorder;
}

function alterBorder() {
    paragraphElement.style.border = '5px solid red';
}

paragraphElement.onmouseover = alterBorder;
paragraphElement.onmouseout = restoreBorder;
