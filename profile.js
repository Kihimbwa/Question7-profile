// Function to load one random profile
function loadProfile() {

    fetch("https://randomuser.me/api/?results=1")

    .then(response => response.json())

    .then(data => {

        console.log(data);

        const person = data.results[0];

        document.querySelector("#photo").src =
        person.picture.large;

        document.querySelector("#name").textContent =
        `${person.name.title} ${person.name.first} ${person.name.last}`;

        document.querySelector("#email").textContent =
        `Email: ${person.email}`;

        document.querySelector("#phone").textContent =
        `Phone: ${person.phone}`;

        document.querySelector("#address").textContent =
        `Address: ${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.country}`;

        document.querySelector("#age").textContent =
        `Age: ${person.dob.age}`;

        document.querySelector("#username").textContent =
        `Username: ${person.login.username}`;

    })

    .catch(error => {

        console.error(error);

        document.querySelector("#profile").innerHTML =
        "<h2>Failed to load profile.</h2>";

    });

}

loadProfile();

document
.querySelector("#loadBtn")
.addEventListener("click", () => {

    loadProfile();

});