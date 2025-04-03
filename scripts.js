document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");
    fetch("content.json")
        .then(response => response.json())
        .then(data => {
            contentDiv.innerHTML += `
                <h2>${data[0].section}</h2>
                <p>${data[0].content}</p>
            `;
        })
        .catch(error => console.error("Error loading content:", error));
});
