const thumbs = document.querySelectorAll('.gallery > *');
const fullImages = document.querySelectorAll('.output > img');
const attributions = document.querySelectorAll('.output > span');
const allOutputElements = document.querySelectorAll('.output *');

function showCorrespondingAttrib(e) {
    for (const attrib of attributions) if (attrib.id.includes(e.target.id))
        attrib.style.display = 'initial';
}

function showCorrespondingImageAndAttrib(e) {
    resetView();
    for (const fullImage of fullImages) if (fullImage.id.includes(e.target.id))
        fullImage.style.display = 'initial';
    showCorrespondingAttrib(e);
}

function resetView() {
    function isAnyVisible(images) {
        for (const image of images) if (image.style.display !== '') return true;

        return false;
    }

    if (!isAnyVisible(fullImages)) {
        for (const element of allOutputElements) element.style.display = '';
        console.log('none are visible, clearing');
    }
}

for (const thumb of thumbs) thumb.addEventListener('mouseover', showCorrespondingAttrib);
for (const thumb of thumbs) thumb.addEventListener('mouseout', resetView);
for (const thumb of thumbs) thumb.addEventListener('mousedown', showCorrespondingImageAndAttrib);
