const thumbs = document.querySelectorAll('.gallery > *');
const fullImages = document.querySelectorAll('.output > img');
const attributions = document.querySelectorAll('.output > span');
const allOutputElements = document.querySelectorAll('.output *');

function updateView(e) {
    for (const element of allOutputElements) element.style.display = '';
    for (const fullImage of fullImages) if (fullImage.id.includes(e.target.id))
        fullImage.style.display = 'initial';
    for (const attrib of attributions) if (attrib.id.includes(e.target.id))
        attrib.style.display = 'initial';
}

for (const thumb of thumbs) thumb.addEventListener('mouseover', updateView);
