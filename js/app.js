// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background = "white";

var cats = [
    "cat1",
    "cat2",
    "cat3"
];

for (var i = 0; i < cats.length; i++) {
    cat = cats[i];
    var counter = 0;
    var divElem = document.createElement('div');
    var imgElem = document.createElement('img');
    imgElem.setAttribute('id', 'imgCat');
    divElem.textContent = cat;

    divElem.addEventListener('click', (function(catCopy, divElemCopy, counter) {
        return function() {
            counter = counter + 1;
            var img = document.getElementById('imgCat');
            img.src = 'img/' + catCopy + '.jpg';
            img.alt = 'Image of ' + catCopy;
            console.log(catCopy + " clicked " + counter + " times!");
        }
    })(cat, divElem, counter));

    document.body.appendChild(divElem);
    document.body.appendChild(imgElem);
}