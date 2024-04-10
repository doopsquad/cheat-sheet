let htmlClick = document.getElementById('html-click');
let htmlGrid = document.getElementById('html-grid');
htmlClick.addEventListener("click", () => {
htmlGrid.style.visibility = "visible";

})

let cssClick = document.getElementById('css-click');
let cssGrid = document.getElementById('css-grid');
cssClick.addEventListener("click", () => {
    cssGrid.style.visibility = "visible";
})

let jsClick = document.getElementById('js-click');
let jsGrid = document.getElementById('js-grid');
jsClick.addEventListener("click", () => {
    jsGrid.style.visibility = "visible";
    try {
        console.log('yup');
    } catch(e) {
        console.error(error);
    }
})

let reactClick = document.getElementById('react-click');
let reactGrid = document.getElementById('react-grid');
reactClick.addEventListener("click", () => {
    reactGrid.style.visibility = "visible";
    try {
        console.log('yup');
    } catch(e) {
        console.error(error);
    }
})

let sweClick = document.getElementById('swe-click');
let sweGrid = document.getElementById('swe-grid');
sweClick.addEventListener("click", () => {
    sweGrid.style.visibility = "visible";
    try {
        console.log('yup');
    } catch(e) {
        console.error(error);
    }
})
