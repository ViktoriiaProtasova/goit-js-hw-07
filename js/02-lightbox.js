import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");

function createGallery() {
  const galleryItemsMarkUp = galleryItems
    .map(
      (item) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
   </a>
</li>`
    )
    .join("");

  galleryListEl.insertAdjacentHTML("beforeend", galleryItemsMarkUp);
}

createGallery();

new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  animationSlide: false,
});
