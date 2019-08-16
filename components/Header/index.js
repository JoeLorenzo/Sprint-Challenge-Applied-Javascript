// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
//
function Header() {
// these variables create the element
const headerDiv = document.createElement('div');
const spanTag1 = document.createElement('span');
const h1Tag = document.createElement('h1');
const spanTag2 = document.createElement('span');

// the following add classes to the correspending element
headerDiv.classList.add('header');
spanTag1.classList.add('date');
spanTag2.classList.add('temp');

// the following add text content to the corresponding element
spanTag1.textContent = 'MARCH 28, 2019'
h1Tag.textContent = 'Lambda Times'
spanTag2.textContent = '98°'

// the following append elements the div header.
headerDiv.appendChild(spanTag1);
headerDiv.appendChild(h1Tag);
headerDiv.appendChild(spanTag2);

// this returns the component
return headerDiv
}


header = Header()
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(header);
