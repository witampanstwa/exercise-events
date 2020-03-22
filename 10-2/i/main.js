const inSide = document.getElementById('side');
const outVolume = document.getElementById('volume');
const outArea = document.getElementById('total_area');
const outLength = document.getElementById('total_length');
const btSubmit = document.getElementById('submit');

function processVolume() {
    outVolume.innerHTML = `Objętość: ${Math.pow(inSide.value, 3)}`
}

function processTotalArea() {
    outArea.innerHTML = `Pole powierzchni całkowitej: ${6 * Math.pow(inSide.value, 2)}`
}

function processTotalLength() {
    outLength.innerHTML = `Łączna długość wszystkich krawędzi: ${12 * inSide.value}`
}

btSubmit.addEventListener('click', processVolume);
btSubmit.addEventListener('click', processTotalArea);
btSubmit.addEventListener('click', processTotalLength);
