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
        <button onclick = "loadPetsByCatgory('${element.category}')" class = "btn"> 
        ${element.category}
        <img class="w-8" src = "${element.category_icon}" alt = "">
        </button>
        `
        categoryContainer.appendChild(div);
    });
}

const loadPetsByCatgory = async (categoryName) => {
    showElement("loader");
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    const data = await response.json();
    showPetsByCategory(data.data);
}

const showPetsByCategory = (pets) => {
    const petContainer = document.getElementById("pet-container");
    petContainer.innerHTML = '';

    if (pets.length == 0) {
        hideElement("loader");
        petContainer.innerHTML = `
        <div class = "col-span-full flex flex-col justify-center items-center py-10 gap-2">
            <img class = "w-[200px]" src = "./images/error.webp" alt = "">
            <h2 class = "text-xl text-center font-semibold"> No Information Available </h2> 
            <p class = "text-center max-w-2xl"> It is a long established fact that a reader will be distracted by the
        readable
        content of a page when looking at
        its layout.The point of using Lorem Ipsum is that it has a.</p> 
        </div>
        `
    }
    pets.forEach((pet) => {
        console.log(pet)
        const div = document.createElement("div");;
        div.innerHTML =
            `
        <div class = "card bg-base-100 w-96 shadow-sm">
            <figure class="w-full h-[200px] object-cover">
            <img src = "${pet.
            image}
            " alt = "
            Shoes " />
            </figure>  
            <div class = "card-body">
            <h2 class = "card-title">${pet.breed} </h2>  
            <p> ${pet.pet_details.slice(0,100)} </p>  
            <div class = "card-actions justify-end">
            <button class = "btn btn-primary"> Select </button>  
            </div>  
            </div>  
        </div>
        `
        petContainer.appendChild(div)
        hideElement("loader");
    })
}

const showElement = (id) => {
    document.getElementById(id).style.display = "block"
}

const hideElement = (id) => {
    document.getElementById(id).style.display = "none";
}

loadCategories();