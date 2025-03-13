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
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    const data = await response.json();
    showPetsByCategory(data.data);
}

const showPetsByCategory = (pets) => {
    const petContainer = document.getElementById("pet-container");
    petContainer.innerHTML = ''
    pets.forEach((pet) => {
        console.log(pet)
        const div = document.createElement("div");
        div.innerHTML =
            `
        <div class = "card bg-base-100 w-96 shadow-sm">
            <figure>
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
    })
}

loadCategories();