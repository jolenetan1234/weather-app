// function to hit API

// handle form submission
const weatherForm = document.querySelector("#weatherForm");
weatherForm.addEventListener("submit", (e) => handleSubmitPromise(e));

const SubmitPromise = (event) => {
    // here we define what data we want etc.
    event.preventDefault(); // prevents the page from reloading

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
    SubmitPromise(event).then((city) => {
        console.log(`Success: ${city}`);
        // fetch data
        fetchData(city);
    }).catch((msg) => {
        alert(msg);
    });
}

// function to get url
const getUrl = (city) => {
    let url = "https://api.weatherapi.com/v1/current.json?key=5146eba384ca42b1a2792606242305&q=";
    // console.log("getUrl test: " + url + city);
    url += city;
    console.log("getUrl: " + url);
    return url;
}

// fetching the data
const fetchData = (city) => {
    let url = getUrl(city);
    // console.log("fetchData: " + url);
    const data = fetch(url, { mode: "cors" })
    .then((res) => {
        // console.log(res.json());
        return res.json();
    })
    .then((res) => {
        console.log(res);
        return res;
    });
}

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