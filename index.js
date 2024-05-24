// function to hit API

// handle form submission
const weatherForm = document.querySelector("#weatherForm");

const handleSubmit = (form) => {

    // here we define what data we want etc.
    city = form.querySelector('input').value;

    // callback function
    fetchData(city);
}

weatherForm.addEventListener("submit", () => handleSubmit(weatherForm));

// fetching the data
fetch("https://api.weatherapi.com/v1/current.json?key=5146eba384ca42b1a2792606242305&q=london", { mode: "cors" }) 
// `fetch` returns a promise that resolves to a Response object. => ie. in the code for fetch, we see `resolve` being called with `resolve(res)`
// In the Response object, res.json() is ANOTHER promise that resolves to the parsed JSON data.
.then( (res) => {
    // console.log(res.json());
    return res.json();
})
.then( (response) => {
    console.log(response);
});