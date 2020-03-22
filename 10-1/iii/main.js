const inputA = document.getElementById('length_a');
const inputB = document.getElementById('length_b');
const resultArea = document.getElementById('area');
const resultPerim = document.getElementById('perim');
const submitArea = document.getElementById('submit_area');
const submitPerim = document.getElementById('submit_perim');

function processArea() {
    resultArea.innerHTML = `Pole: ${inputA.value * inputB.value}`;
}

function processPerim() {
    resultPerim.innerHTML = `Obwód: ${2 * inputA.value + 2 * inputB.value}`;
}

submitArea.addEventListener('click', processArea);
submitPerim.addEventListener('click', processPerim);
