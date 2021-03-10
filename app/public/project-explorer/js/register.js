let firstName, lastname, email, password, program, matricNumber, graduationYear;

firstName = document.getElementById("firstname").value;
lastname = document.getElementById("lastname").value;
email = document.getElementById("email").value;
password = document.getElementById("password").value;
program = document.getElementById("program").value;
matricNumber = document.getElementById("matricNumber").value;
graduationYear = document.getElementById("graduationYear").value;

let url = " request url"; // put the request url here

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

if (
  firstName &&
  lastname &&
  email &&
  password &&
  program &&
  matricNum &&
  graduationYear
) {
  let postReqHeader = {
    firstName,
    lastname,
    email,
    password,
    program,
    matricNum,
    graduationYear,
  };
  postData(url, postReqHeader).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
} else {
  alert("ensure all feilds are filled with correct values");
}
//git pull upstream master && git push origin master.
