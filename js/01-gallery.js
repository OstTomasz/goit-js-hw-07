import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
  .map(
    (
      item
    ) => `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a></div>`
  )
  .join("");
const gallery = document.querySelector(".gallery");
gallery.innerHTML = markup;
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
        <img src=${e.target.getAttribute("src")}>
    `);

  instance.show();
});
