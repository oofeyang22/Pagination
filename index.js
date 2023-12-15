// Define an array of items

const items= [
{
  src: 'images/1.jpg',
  desc: 'Asian children'
},
{
  src: 'images/2.jpg',
  desc: 'woman sitting'
},
{
  src: 'images/3.jpg',
  desc: 'man smiling'
},
{
  src: 'images/4.jpg',
  desc: 'man posing on street'
},
{
  src: 'images/5.jpg',
  desc: 'man reading book'
},
{
  src: 'images/6.jpg',
  desc: 'native american smiling'
},
{
  src: 'images/7.jpg',
  desc: 'a man thinking'
},
{
  src: 'images/8.jpg',
  desc: 'woman in the fields'
},
{
  src: 'images/9.jpg',
  desc: 'boy smiling'
},
{
  src: 'images/10.jpg',
  desc: 'model posing'
},
];

// Selecting elements and initializing variables
const nav= document.querySelector(".nav");
const content= document.querySelector(".content");

// Initialize variables for pagination
let pageIndex= 0;
let itemsPerPage= 3;

// Initial load of items
loadItems();
// Function to load items into content area
function loadItems() {
    // Clear the content area
    content.innerHTML= "";
    // Loop through items based on the pageIndex and itemsPerPage
    for (let i=pageIndex*itemsPerPage;
i<(pageIndex*itemsPerPage)+itemsPerPage; i++) {
         if (!items[i]) {break}
         // Create a new “div” element to display an item
         const item= document.createElement('div');
         item.innerHTML= `
         <div>
             <img src="${items[i].src}"/>
         </div>
         <div>
             <span>${items[i].desc}</span>
         </div>
         `
         // Append the item to the content area
         content.append(item);
     }
     // Load navigational elements
     loadNav();
}
// Function to load navigational elements
function loadNav() {
    //clear the navigational area
    nav.innerHTML= '';
    // Loop through the pages based on number of items and itemsPerpage
    for (let i=0; i<(items.length/itemsPerPage); i++) {
        // Create a “span” element for each page
        const span= document.createElement('span');
        span.innerHTML= i+1; // Page number starts from 1
        // Add a click event listener to each page element
        span.addEventListener('click', (e) => {
        pageIndex = e.target.innerHTML-1; // Set the new page index
        loadItems(); // Reload items based on the new page
        });
         // Highlight the current page by increasing font size
         if (i === pageIndex) {
            span.style.fontSize = '2rem';
         }
         // Append the page element to the navigation area
         nav.append(span);
      }
};
