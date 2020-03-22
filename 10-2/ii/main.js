const inSide = document.getElementById('side');
const outVolume = document.getElementById('volume');
const outArea = document.getElementById('total_area');
const outLength = document.getElementById('total_length');
const btSubmit = document.getElementById('submit');

btSubmit.addEventListener('click', () => {
    outVolume.innerHTML = `Objętość: ${Math.pow(inSide.value, 3)}`
});
btSubmit.addEventListener('click', () => {
    outArea.innerHTML = `Pole powierzchni całkowitej: ${6 * Math.pow(inSide.value, 2)}`
});
btSubmit.addEventListener('click', () => {
    outLength.innerHTML = `Łączna długość wszystkich krawędzi: ${12 * inSide.value}`
});
