 document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input input");
    const listItems = document.querySelectorAll(".search-list li");
    const closeSearchBtn = document.querySelector(".close-search");

    // Filter on input
    searchInput.addEventListener("keyup", function () {
      const filter = this.value.toLowerCase();

      listItems.forEach((item) => {
        const name = item.querySelector("h3").textContent.toLowerCase();
        const company = item.querySelector("h4").textContent.toLowerCase();
        const type = item.querySelector("p").textContent.toLowerCase();

        if (name.includes(filter) || company.includes(filter) || type.includes(filter)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });

    // Clear input and show all
    closeSearchBtn.addEventListener("click", function () {
      searchInput.value = "";
      listItems.forEach((item) => {
        item.style.display = "";
      });
    });
  });