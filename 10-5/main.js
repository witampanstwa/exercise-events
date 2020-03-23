const thumbs = document.querySelectorAll('.gallery > *');
const fullImages = document.querySelectorAll('.output > img');
const attributions = document.querySelectorAll('.output > span');
const allOutputElements = document.querySelectorAll('.output *');

function showCorrespondingAttrib(e) {
    for (const attrib of attributions) if (attrib.id.includes(e.target.id))
        attrib.style.display = 'initial';
}

function showCorrespondingImageAndAttrib(e) {
    showCorrespondingAttrib(e);
}

function resetView() {
    function areNoneVisible(images) {
        for (const image of images) if (image.style.display !== '') return false;

        return true;
    }

    if (areNoneVisible(fullImages)) {
        for (const element of allOutputElements) element.style.display = '';
    }
}

for (const thumb of thumbs) thumb.addEventListener('mouseover', showCorrespondingAttrib);
for (const thumb of thumbs) thumb.addEventListener('mouseout', resetView);
for (const thumb of thumbs) thumb.addEventListener('mousedown', showCorrespondingImageAndAttrib);
