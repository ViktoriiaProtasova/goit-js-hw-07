import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

window.addEventListener("load", createGallery);

galleryListEl.addEventListener("click", onImageClick);

function createGallery() {
  const galleryItemsMarkUp = galleryItems
    .map(
      (item) =>
        `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
  </a></li>`
    )
    .join("");

  galleryListEl.insertAdjacentHTML("beforeend", galleryItemsMarkUp);
}

function onImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  let clickedGalleryImageLink = `${event.target.dataset.source}`;

  showClickedFullSizeImage(clickedGalleryImageLink);
}

function showClickedFullSizeImage(link) {
  const instance = basicLightbox.create(
    `<img src="${link}" />
        <a>Close</a>
   `,
    {
      onShow: (instance) => {
        instance.element().querySelector("a").onclick = instance.close;
      },
    }
  );

  document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      instance.close();
    }
  });

  instance.show();
}

console.log(galleryItems);
