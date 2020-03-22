const thumbs = document.querySelectorAll('.gallery > *');

function showCorrespondingAttrib() {
    console.log('on ' + this.id);
}

function resetView() {
    console.log('reset');
}

for (const thumb of thumbs) thumb.addEventListener('mouseover', showCorrespondingAttrib);
for (const thumb of thumbs) thumb.addEventListener('mouseout', resetView);
