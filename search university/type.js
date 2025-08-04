let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

let countryName;
let url;

button.addEventListener("click", function () {
    countryName = input.value; // Input se country name lena
    url = `http://universities.hipolabs.com/search?country=${countryName}`; // URL set karna
    getUniversity();
});

async function getUniversity() {
    try {
        let res = await axios.get(url); // API call
        let dataRes = res.data; // Response se data lena
        console.log("API Response:", dataRes); // Response ko console par print karna

        // Clear the existing list
        list.innerHTML = ''; 

        // Limit to 10 universities
        for (let i = 0; i < Math.min(dataRes.length, 10); i++) {
            let newItem = document.createElement("li");
            newItem.innerHTML = dataRes[i].name; // University name ko set karna
            list.appendChild(newItem); // List mein add karna
        }

        // Check if no universities found
        if (dataRes.length === 0) {
            let newItem = document.createElement("li");
            newItem.innerHTML = "No universities found for this country."; // Message for no results
            list.appendChild(newItem);
        }
    } catch (e) {
        console.log(e); // Error handling
    }
}

