let imgGallery = document.querySelectorAll(".img-gallery .group");
let filterBtnContainer = document.querySelector(".filter_btn_container");
let filterButtons = filterBtnContainer.querySelectorAll("[data-category]");

filterBtnContainer.addEventListener("click", (elm) => {
  if (elm.target.hasAttribute("data-category")) {
    let attribute = elm.target.getAttribute("data-category");

    // 🔹 Reset all buttons to inactive state
    filterButtons.forEach(btn => {
      btn.classList.remove("bg-gradient-to-r","from-purple-500","to-pink-500","text-white");
      btn.classList.add("bg-white","text-gray-700");
    });

    // 🔹 Set the clicked button as active
    elm.target.classList.remove( "bg-white","text-gray-700" );
    elm.target.classList.add("bg-gradient-to-r","from-purple-500","to-pink-500", "text-white");

    // 🔹 Filter the images
    imgGallery.forEach((e) => {
      let category = e.getAttribute("data-image");

      if (attribute === "all" || category === attribute) {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
  }
});
