const thumbs = document.querySelectorAll('.gallery > *');
const fullImages = document.querySelectorAll('.output > img');
const attributions = document.querySelectorAll('.output > span');
const allOutputElements = document.querySelectorAll('.output *');

function showCorrespondingAttrib(e) {
    function isAnyVisible(attribs) {
        for (const attrib of attribs) if (attrib.style.display !== '') return true;
        return false;
    }

    if (e.type === 'mouseover') resetView(e);
    if (!isAnyVisible(attributions)) {
        for (const attrib of attributions) if (attrib.id.includes(e.target.id))
            attrib.style.display = 'initial';
    }
}

function showCorrespondingImageAndAttrib(e) {
    resetView(e);
    for (const fullImage of fullImages) if (fullImage.id.includes(e.target.id))
        fullImage.style.display = 'initial';
    showCorrespondingAttrib(e);
}

function resetView(e) {
    function isAnyVisible(images) {
        for (const image of images) if (image.style.display !== '') return true;
        return false;
    }

    if (!isAnyVisible(fullImages) || e.type !== 'mouseout') {
        for (const element of allOutputElements) element.style.display = '';
    }
}

for (const thumb of thumbs) thumb.addEventListener('mouseover', showCorrespondingAttrib);
for (const thumb of thumbs) thumb.addEventListener('mouseout', resetView);
for (const thumb of thumbs) thumb.addEventListener('mousedown', showCorrespondingImageAndAttrib);
