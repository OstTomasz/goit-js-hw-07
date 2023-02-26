import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
  )
  .join("");
const gallery = document.querySelector(".gallery");
gallery.innerHTML = markup;
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
  fadeSpeed: 250,
  scrollZoom: false,
  showCounter: false,
});
