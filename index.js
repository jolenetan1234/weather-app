// function to hit API

// handle form submission
const weatherForm = document.querySelector("#weatherForm");
weatherForm.addEventListener("submit", (e) => handleSubmitPromise(e));

const SubmitPromise = (event) => {
    // here we define what data we want etc.
    event.preventDefault();

    const form = event.target;
    const city = form.querySelector('input').value; // event.target refers to the <form> element
    // city = form.querySelector('input').value;
    let p = new Promise((resolve, reject) => {
        if (city != "") {
            resolve(city);
        } else {
            reject("Input cannot be empty.");
        };
    });
    return p;
};

const handleSubmitPromise = (event) => {
    // handle promise
    SubmitPromise(event).then((res) => {
        console.log(`Success: ${res}`);
    }).catch((msg) => {
        alert(msg);
    });
}

// handle promise
// SubmitPromise(event).then( (res) => {
//     console.log(`Success: ${res}`);
// }).catch((msg) => {
//     alert(msg);
// })
    



    // callback function
    // fetchData(city);

// fetching the data
// const fetchData = (city) => {
//     let url = 
// }

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