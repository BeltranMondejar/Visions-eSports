// Modal de noticias
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Modal de galería de imágenes
function expandImage(imgSrc) {
    document.getElementById("modalImg").src = imgSrc;
    document.getElementById("imgModal").style.display = "block";
}

function closeImageModal() {
    document.getElementById("imgModal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}