const baseUrl = "https://www.project-exam-1.one/wp-json/wc/store/products/?per_page=12";
const carousel = document.querySelector(".images-container");
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");

async function getData(url) {
    try {
    const response = await fetch(url);
    const data = await response.json();
    
    function createHTML(data) {
        for (let i = 0; i < data.length; i++) {
            const display = (i < 4) ? "block" : "none";
            const selected = (i === 0) ? "selected-image" : "";
            carousel.innerHTML += ` <figure style="display: ${display}" class="${selected}">
                                        <img src="${data[i].images[0].src}" alt="${data[i].name}">
                                        <h2>${data[i].name}</h2>
                                    </figure> `
        }
    }
    createHTML(data);
}
    catch (error) {
    carousel.innerHTML = displayError("An error occurred while fetching the data!");
}
    
const carouselImages = document.querySelectorAll(".images-container");
    
carouselImages.forEach(function(image) {
image.onclick = function(event) {
    document.querySelector(".selected-image").classList.remove("selected-image");
    const imageParent = event.target.parentNode;
    imageParent.classList.add("selected-image");
}

let shownImagePage = 0;
const numberOfImages = 4;
const maxPagesOfImages = 3;
const allFigures = document.querySelectorAll("figure");

nextButton.onclick = function () {
    shownImagePage = (shownImagePage +1) % maxPagesOfImages;
    document.querySelector(".selected-image").classList.remove("selected-image");
    allFigures.forEach((elem, idx) => {
        if (idx === (idx % numberOfImages) + (numberOfImages * shownImagePage)) {
            elem.style.display = "block";
            if (idx % numberOfImages === 0) {
                elem.classList.add("selected-image")
            }
        } else {
            elem.style.display = "none";
        }
    });
    upcomingSection.innerHTML = "";
    getSecondData(secondUrl);
}

prevButton.onclick = function () {
    shownImagePage = (shownImagePage -1) % maxPagesOfImages;
    if (shownImagePage === -1) {
        shownImagePage = 2;
    }
    document.querySelector(".selected-image").classList.remove("selected-image");
    allFigures.forEach((elem, idx) => {
        if (idx === (idx % numberOfImages) + (numberOfImages * shownImagePage)) {
            elem.style.display = "block";
            if (idx % numberOfImages === 0) {
                elem.classList.add("selected-image")
            }
        } else {
            elem.style.display = "none";
        }
    });

    upcomingSection.innerHTML = "";
    getSecondData(secondUrl);
}
})
}
 

    
getData(baseUrl);