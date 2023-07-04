// DOM Manipulation 
function hotelNames(resorts){
    let grab = document.getElementById("hotel-names")

    resorts.forEach(resort => {
        let list = document.createElement("li")
        list.classList = "place"
        list.innerHTML = resort.name
    })
}