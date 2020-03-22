const paragraphElement = document.getElementById('paragraph');

const originalBorder = paragraphElement.style.border;

paragraphElement.onmouseover = () => {
    paragraphElement.style.border = '5px solid red';
};
paragraphElement.onmouseout = () => {
    paragraphElement.style.border = originalBorder;
};
