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

    fetch(url, { mode: "cors" })
    .then((res) => {
        if (!res.ok) {
            alert("wtf did u fail geography or something");
            throw new Error("invalid city");
        }
        return res.json();
    })
    .then((res) => {
        // console.log(res);
        displayTemp(res);
    })
    .catch(() => {
        console.log("error caught");
        return
    });
}

const displayTemp = (data) => {
    const temp_c = data.current.temp_c;
    const temp_f = data.current.temp_f;
    console.log("filterData test");
    console.log(temp_c);

    const p_c = document.querySelector("#temp_c");
    const p_f = document.querySelector("#temp_f");
    p_c.textContent = `${temp_c} °C`;
    p_f.textContent = `${temp_f} °F`;

    // const container = document.querySelector("#temp");
    // // first create element
    // const temp_c_content = document.createElement("p");
    // temp_c_content.textContent = `${temp_c} °C`
    // // then append that element as a child to where u want it to be
    // container.appendChild(temp_c_content);
};

// IGNORE
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