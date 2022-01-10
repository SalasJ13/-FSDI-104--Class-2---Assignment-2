
let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[
        {
            name:"Chucky",
            age:10,
            gender:"Male",
            breed:"Doberman",
            service:"Consult",
            ownerName:"Jazmin",
            contactPhone:"665-234-3532"
        },
        {
            name:"Querubin",
            age:10,
            gender:"Female",
            breed:"Pastor Aleman",
            service:"Consult",
            ownerName:"Jojo",
            contactPhone:"665-344-3532"
        }

    ]
}
function displayInfo(){
    document.getElementById("footer-info").innerHTML=`
    <p>${saloon.address.street} ${saloon.address.number}, ZIP code: ${saloon.address.zip}</p>
    <p>${saloon.address.city}, ${saloon.address.state}</p>
    `;
}
displayInfo();

//clase 2
//constructor
function Pet(petName, age, gender, breed, service, owner, phone){
    this.name = petName;
    this.age = age;
    this.breed =  breed;
    this.gender = gender;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
}



function createCard(pet){
    return `
    <div class="card my-card">
    <h2>${pet.name}</h2>
    <label>Age: ${pet.age}</label>
    <label>Breed: ${pet.breed}</label>
    <label>Gender: ${pet.gender}</label>
    <label>Service: ${pet.service}</label>
    <label>Owner: ${pet.owner}</label>
    <label>Phone: ${pet.phone}</label>
    </div>
    `;
}



function getInfo(){

    let petName = document.getElementById("txtPetName").value;
    let age = document.getElementById("nbAge").value;
    let gender = document.getElementById("dlGender").value;
    let breed = document.getElementById("dlBreed").value;
    let service = document.getElementById("dlServices").value;
    let owner = document.getElementById("txtOwner").value;
    let phone = document.getElementById("pnOwner").value;

    //objeto
    let pet = new Pet(petName,age,gender,breed,service,owner,phone);
    saloon.pets.push(pet);
    //console.log(pet);
    for(let i=0;i<saloon.pets.length; i++){
        console.log(saloon.pets[i]);
    }
    document.getElementById("petInfo").reset();
}

