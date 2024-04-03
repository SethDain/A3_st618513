window.alert("Welcome to my work and experience! Below you will find a few of my projects and what they do! Make sure to check out my socials at the bottom!");

function backgroundColorChanger() {
    let color = document.getElementById("inputtedColor").value;
    document.body.style.backgroundColor = color;
}
function resetBackground() {
    let color = 'rgb(99, 93, 93)';
    document.body.style.backgroundColor = color;
}