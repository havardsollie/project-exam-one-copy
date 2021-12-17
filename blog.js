const baseUrl = "https://www.project-exam-1.one/wp-json/wc/store/products/";
const dataSection = document.querySelector(".blog-posts");
const categories = document.querySelectorAll(".category");
const perPage = document.querySelector(".per-page-selector")

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        data.forEach(function(data) {
            dataSection.innerHTML += `
            <div class="card">
                <a href="details.html?id=${data.id}"> 
                <h3>${data.name}</h3>
                <img src="${data.images[0].src}" alt="${data.name}">
                </a>
            </div>`     
        })

    } 
    catch (error) {
        dataSection.innerHTML = displayError("An error occurred while fetching the data!");
    }
}

getData(baseUrl);

categories.forEach(function(category) {
    category.onclick = function(event) {
        let newUrl;
        
        const catChosen = event.target.value;
        newUrl = baseUrl + `?category=${catChosen}`
        
        dataSection.innerHTML = "";
        getData(newUrl);
    }
})

perPage.onclick = function(event) {
    const changeURL = baseUrl + `?per_page=${event.target.value}`;
    dataSection.innerHTML = "";
    getData(changeURL);
    perPage.style.display = "none";
}
