window.alert("Welcome to my homepage! Hover over images to make them grow! Also check out my socials at the foot of the page, enjoy!");

function backgroundColorChanger() {
    let color = document.getElementById("inputtedColor").value;
    document.body.style.backgroundColor = color;
}
function resetBackground() {
    let color = 'rgb(99, 93, 93)';
    document.body.style.backgroundColor = color;
}