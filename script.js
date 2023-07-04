// DOM Manipulation 
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