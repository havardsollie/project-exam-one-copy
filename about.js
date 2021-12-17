const baseUrl = "https://www.project-exam-1.one/wp-json/wp/v2/posts/";
const dataSection = document.querySelector(".image");


async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        dataSection.innerHTML += `${data[2].content.rendered}`;

    }

    catch (error) {
        dataSection.innerHTML = displayError("An error occurred while fetching the data!");
    }

    
}

getData(baseUrl);
