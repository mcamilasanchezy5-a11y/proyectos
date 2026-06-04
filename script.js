const modal = document.createElement("div");
modal.classList.add("modal");

modal.innerHTML = `
    <span class="close">&times;</span>
    <img id="modalImg">
`;

document.body.appendChild(modal);

const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".galeria img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
        modal.style.display = "none";
    }
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});