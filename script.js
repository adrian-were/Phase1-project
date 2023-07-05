// fetch hotel names from JSON server
function fetchHotelNames(){
    fetch('http://localhost:3000/hotels')
    .then(res => res.json())
    .then(data => {
        hotelNames(data)
    })
}

// Event listener
document.addEventListener('DOMContentLoaded',() => {
    fetchHotelNames()
})

// DOM Manipulation for displaying hotel names
function hotelNames(resorts){
    let grab = document.getElementById("hotel-names")

    resorts.forEach(resort => {
        let list = document.createElement("li")
        list.classList = "place"
        list.innerHTML = resort.name
        grab.appendChild(list)

    // Event listener
    list.addEventListener("click", function(){
        displayHotelDetails(resort)
    })
    })
}

// fetching individual hotel details
function displayHotelDetails(resort){
    fetch(`http://localhost:3000/hotels/${resort.id}`)
    .then(res => res.json())
    .then(data => {
        userDetails(data)
    })
}

// // DOM Manipulation for displaying hotel details
function userDetails(resort){
    let other = document.querySelector("#hotel-details")
    other.innerHTML = `
    <p>${resort.name}</p>
    <img src="${resort.image}" alt="hotel picture" />
    <p> <em>Location</em> ${resort.location}</p>
    <p> <em>Contact</em> ${resort.phone}</p>
    <p> <em>Cost per night</em> Ksh ${resort.cost}</p>
    `
}

// target form details 
let getForm = document.getElementById('user')

getForm.addEventListener('submit', e => {
    e.preventDefault()

    let userData = {
        name: e.target.name.value,
        image: e.target.image.value,
        location: e.target.location.value,
        phone: e.target.phone.value,
        cost: e.target.cost.value
    }

   postNewUserData(userData)
   getForm.reset()
})

