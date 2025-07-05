
// --search input function
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input input");
    const listItems = document.querySelectorAll(".search-list li");
    const closeBtn = document.querySelector(".close-search");

    // Show/hide close button and filter items
    searchInput.addEventListener("input", function () {
      const filter = this.value.toLowerCase();
      closeBtn.style.display = filter ? "block" : "none";

      listItems.forEach(item => {
        const name = item.querySelector("h3").textContent.toLowerCase();
        const company = item.querySelector("h4").textContent.toLowerCase();
        const type = item.querySelector("p").textContent.toLowerCase();

        item.style.display = (name.includes(filter) || company.includes(filter) || type.includes(filter)) ? "" : "none";
      });
    });

    // Clear input and reset list
    closeBtn.addEventListener("click", function () {
      searchInput.value = "";
      closeBtn.style.display = "none";

      listItems.forEach(item => item.style.display = "");
    });
  });