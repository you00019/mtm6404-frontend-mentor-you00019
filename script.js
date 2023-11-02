document.addEventListener("DOMContentLoaded", function () {
  let toggleItems = document.querySelectorAll(".toggle-item");

  toggleItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      let submenu = e.currentTarget.querySelector(".submenu");
      if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
      // Prevent the default action of the anchor tag
      e.preventDefault();
    });
  });
});
