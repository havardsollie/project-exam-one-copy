const secondUrl = "https://www.project-exam-1.one/wp-json/wp/v2/posts/";
const upcomingSection = document.querySelector(".upcoming");

async function getSecondData(secondUrl) {
    const response = await fetch(secondUrl);
    const table = await response.json();

    function createTable () {
        upcomingSection.innerHTML += `<div class="fixtures">
                                        <h3>${table[0].title.rendered}</h3>
                                        ${table[0].content.rendered}
                                    </div>`
    }
    createTable();

}

getSecondData(secondUrl);
