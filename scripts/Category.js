const loadCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    showCategory(data.categories);
}

const showCategory = (categories) => {
    categories.forEach(element => {
        const categoryContainer = document.getElementById("category-container");
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick = "loadPetsByCatgory('${element.category}')"
        class = "select-btn text-lg btn py-6 px-10 rounded-3xl hover:bg-[#0E7A8119 ]">
        <img class="w-8" src = "${element.category_icon}" alt = "">
        ${element.category}
        </button>
        `
        categoryContainer.appendChild(div);
    });

    const selectCategory = document.getElementsByClassName("select-btn");
    for (const selectBtn of selectCategory) {
        selectBtn.addEventListener("click", function () {
            removeActiveClass();
            selectBtn.classList.add("active", "bg-[#0E7A81]", "text-white");
        })
    }
}

const removeActiveClass = () => {
    const activeBtn = document.getElementsByClassName("active");
    for (const btn of activeBtn) {
        btn.classList.remove("active", "bg-[#0E7A81]", "text-white");
    }
}

loadCategories();