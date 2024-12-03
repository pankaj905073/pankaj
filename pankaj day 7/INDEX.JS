// select

const h1Ele = document.getElementById("h1")
console.log(h1);


// new content variable:
const newContent = "---------12345------";

// Assign Value to Tag:

h1Ele.innerText = newContent;


const divEle = document.getElementsByClassName("title");

//              0 1 2 3 ,....
//  divEle = [div,div,div,div,....]

for(let i = 0; i < divEle.length; i++) {
    // even index:
    if (i%2 === 0) {
divEle[i].innerText = "even";
    } else {
    // odd index
    divEle[i].innerText = "odd";
}
}
    