// DOM Manipulation for displayin hotel names
function hotelNames(resorts){
    let grab = document.getElementById("hotel-names")

    resorts.forEach(resort => {
        let list = document.createElement("li")
        list.classList = "place"
        list.innerHTML = resort.name
        grab.appendChild(list)
    })
}

// fetch hotel names from JSON server
function fetchHotelNames(){
    fetch('http://localhost:3000/hotels')
    .then(res => res.json())
    .then(data => {
        hotelNames(data)
    })
}

// Event listener
document.addEventListener('DOMContentLoaded',(e) => {
    fetchHotelNames()
    e.preventDefault()
})

// DOM Manipulation for displaying hotel details
function hotelDetails(resort){
    let other = document.querySelector("#hotel-details")
    other.innerHTML = `
    <p>${resort.name}</p>
    <img src="${resort.image}" alt="hotel picture" />
    <p> <em>Location</em> ${resort.location}</p>
    <p> <em>Contact</em> ${resort.phone}</p>
    <p> <em>Cost per night</em> Ksh ${resort.cost}</p>
    `
}