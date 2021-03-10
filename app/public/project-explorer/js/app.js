const select = document.getElementById("program")

async function setState() {
    try {
        const progRes = await fetch("/api/programs")
        const programs = await progRes.json()
        let options = programs.map(program => {
            return `<option value=${program}>${program}</option>`
        })
        options = options.join("")
        select.innerHTML = options
    } catch (e) {
        console.log(e)
    }
}
setState();

const graduationYear = document.getElementById("graduationYear");

// <option value="2013">2013</option>

fetch("/api/graduationYears")
    .then(response => response.json())
    .then((data) => {
        let options = data.map(item => `<option value="${item}">${item}</option>`)
        return options;
    })
    .then(res => res.join(""))
    .then(res => graduationYear.innerHTML = res)
    .catch(err => console.log(err))



const myAlert = document.getElementById("myAlert")
myAlert.style.display = "none"


const signupForm = document.getElementById("signupForm");

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const boss = JSON.stringify(value, null, '  ');
    console.log({ value });

    console.log(boss)
}

signupForm.addEventListener('submit', handleSubmit);


fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(value), // All form data
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then(id => {
        uid = id; // I am to store the id in a cookie named uid. Don't know if that is correct
        console.log(id)
        window.location.replace('index.html'); // redirect user to index.html page
    })
    .catch(error => {
        let newAlert = document.createElement('div')
        newAlert.className = "alert";
        newAlert.classList.add("alert-danger");
        newAlert.innerHTML = error;// Supposed to print error message. 
        document.getElementById("signupForm").prepend(newAlert);
    })