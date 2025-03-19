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
        <div class = "bg-[#13131308] col-span-full flex flex-col justify-center items-center p-10 gap-2 rounded-xl">
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
        //console.log(pet)
        const div = document.createElement("div");;
        div.innerHTML =
            `
        <div class = "card card- bg-base-100 shadow-sm space-y-2 py-6">
            <figure class="w-full h-[200px] object-cover rounded-lg">
            <img src = "${pet.image}" alt = "Shoes" />
            </figure>  
            <div class = "card-body">
            <h2 class = "card-title text-xl font-bold"> ${pet.pet_name}</h2>
            <p><i class = "fa-regular fa-rectangle-list"></i>
            <span>Breed: ${pet.breed}</span></p>  
            <p><i class = "fa-regular fa-calendar"></i>
            <span>Birth: ${pet.date_of_birth}</span></p>
            <p><i class="fa-solid fa-mercury"></i>
            <span>Gender: ${pet.gender}</span></p>
            <p><i class="fa-solid fa-dollar-sign"></i>
            <span>Price: ${pet.price}</span></p>
              
            <div class = "card-actions items-center justify-between mt-2">
            <button class = "btn"> <i class="fa-regular fa-thumbs-up"></i></button>
            <buton class = "btn"> Adopt </buton>
            <button onclick="loadPetDetails('${pet.petId}')" class = "btn"> Details </button>  
            </div>  
            </div>  
        </div>
        `
        petContainer.appendChild(div)
        hideElement("loader");
    })
}


const loadPetDetails = async (petId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    const data = await response.json();
    displayPetDetails(data.petData);
}

const displayPetDetails = (details) => {
    document.getElementById("pet_details").showModal();
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
    <div class="card bg-base-100 card-xl shadow-sm justify-center gap-5 py-5">
        <figure class="card-image w-full">
            <img src="${details.image}" alt="Shoes">
        </figure>
        <div class="px-3">
            <h2 class="text-2xl font-bold text-center">${details.pet_name}</h2>
            <div class="flex justify-around mt-2">
                <div class="flex flex-col">
                    <p><i class = "fa-regular fa-rectangle-list"></i>
                    <span>Breed: ${details.breed}</span></p>  
                    <p><i class="fa-solid fa-mercury"></i>
                    <span>Gender: ${details.gender}</span></p>
                    <p><i class="fa-solid fa-shield-virus"></i>
                    <span>Vaccinated status: ${details.vaccinated_status}</span></p>
                </div>
                <div class ="flex flex-col">
                    <p><i class = "fa-regular fa-calendar"></i>
                    <span>Birth: ${details.date_of_birth}</span></p>
                    <p><i class="fa-solid fa-dollar-sign"></i>
                    <span>Price: ${details.price}</span></p>
                </div>
            </div>
            <div class="mt-5 space-y-2">
            <h2 class="text-xl font-semibold">Details Information</h2>
            <p>${details.pet_details}</p>
            </div>
            
        </div>
        </div>
    `
}

const showElement = (id) => {
    document.getElementById(id).style.display = "block"
}

const hideElement = (id) => {
    document.getElementById(id).style.display = "none";
}