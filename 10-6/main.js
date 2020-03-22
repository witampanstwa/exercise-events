const inputs = document.getElementsByClassName('input');

function alterStyle() {
    this.name = 'new_name';
    this.style.fontWeight = 'bold';
    this.style.color = 'white';
    this.style.backgroundColor = 'red';
}

for (const input of inputs) input.addEventListener('mousedown', alterStyle);
