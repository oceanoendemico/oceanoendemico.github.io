console.log("Océano Endémico listo 🌊");

const imagenes = [
    "img/tortuga.jpg",
    "img/vaquita-marina.jpg",
    "img/tiburon-ballena.webp",
    "img/manati.jpg",
    "img/coral-alce.jpg"
];

const heroImgs = document.querySelectorAll(".hero-images img");

let index = 0;

setInterval(cambiarImagenes, 5000);

function cambiarImagenes() {
    index++;

    heroImgs.forEach((img, i) => {
        img.src = imagenes[(index + i) % imagenes.length];
    });
}


/*===== DETENER VIDEOS AL CERRAR MODAL =====*/

const modals = document.querySelectorAll('.modal');

modals.forEach((modal) => {

    modal.addEventListener('hidden.bs.modal', () => {

        const iframe = modal.querySelector('iframe');

        iframe.contentWindow.postMessage(
            '{"event":"command","func":"stopVideo","args":""}',
            '*'
        );

    });

});




