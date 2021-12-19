const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const dataSection = document.querySelector(".details");
const title = document.querySelector("title");
const modalFetch = document.querySelector("#clickImg");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const main = document.querySelector("main");

const url = "https://www.project-exam-1.one/wp-json/wc/store/products/" + id;

async function goToPost() {
    try {

        const response = await fetch(url);
        const data = await response.json();
        createHTML(data);
        newTitle(data);
    }
    catch (error) {
        dataSection.innerHTML = displayError("An error occurred while fetching the API");
    }
        
}  
goToPost();

function newTitle(data) {
    title.innerHTML = `Sport i Oslo - ${data.name}` 
}

function createHTML(data) {
    dataSection.innerHTML = `
        <span class="head">
            <h1>${data.name}</h1>
            <img id="clickImg" src="${data.images[0].src}" alt="${data.name}">
            <div id="imgModal" class="modal">
                <div class="modal-content">
                <img src="${data.images[0].src}">
                </div>
            </div>
        </span>
        <span class="game-text">
         <p>${data.description}</p>
            <hr>
        </span>
        <span class="score-text">
            <p>${data.short_description}</p>
        </span>
    `

    const modalFetch = document.querySelector("#clickImg");
    const modal = document.querySelector(".modal");

    modalFetch.onclick = function() {
        modal.style.display = "block";
        modalFetch.src = this.src;
        console.log("click");
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        
    }
    
}