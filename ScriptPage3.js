window.alert("Welcome to my future goals as well as some people in the industry who stand out to me! Make sure to fill out the form at the bottom of the page to report your experience with my page!");

function checkForm() {
const form = document.getElementById("WebpageSurvey");
const submitButton = document.getElementById("submit");
const message = document.getElementById("errorMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    message.innerHTML="";
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const selYes = document.getElementById("yes");
    const selNo = document.getElementById("no");
    const why = document.getElementById("Why").value;
    const yourEmail = document.getElementById("yourEmail").value;

    if (!fname || !lname || !why || !yourEmail || (!selNo.checked && !selYes.checked)) {
        message.style.backgroundColor = "red";
        message.style.color = "white";
        message.innerHTML = "Must fill out all boxes and check atleast answer";
        return;
    }
    message.innerHTML="";
    message.style.backgroundColor = "green";
    message.style.color = "white";
    message.innerHTML = "Form submitted!";
    
});
}

function backgroundColorChanger() {
    let color = document.getElementById("inputtedColor").value;
    document.body.style.backgroundColor = color;
}
function resetBackground() {
    let color = 'rgb(99, 93, 93)';
    document.body.style.backgroundColor = color;
}
