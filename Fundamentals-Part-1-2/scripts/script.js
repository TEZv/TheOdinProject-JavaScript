
const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


// TASK 1
// 1. Add a <p> with red text that says “Hey I’m red!”
//https://www.w3schools.com/js/js_htmldom_nodes.asp


// // creates a new <p> element
//let para = document.createElement('p');

// // To add text to the <p> element, you must create a text node first. This code creates a text node:
//let node = document.createTextNode('Hey Im red!');

// // Then you must append the text node to the <p> element:
//para.appendChild(node); 

// // Append the new element to an existing element in HTML. Finds an existing element by ID:
//let element = document.getElementById('container');

// // This code appends the new element to the existing element:
//element.appendChild(para);


// // HTML DOM change font color 
// // https://www.w3schools.com/jsref/prop_style_color.asp
// document.getElementById("container").style.color = "red";


let para = document.createElement('p');
para.textContent = 'Hey, I\'m red.';
para.style.color = 'red';
document.getElementById('container').appendChild(para);


// TASK 2
// 2. Add an <h3> with blue text that says “I’m a blue h3!”
//https://stackoverflow.com/questions/53348092/manipulating-dom-with-javascript

let head3 = document.createElement('h3');
head3.textContent =  'I\’m a blue h3!';
head3.style.color = 'blue';
document.getElementById('container').appendChild(head3);


// TASK 3
// Add a <div> with a black border and pink background color with the following elements inside of it: 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://www.w3schools.com/jsref/prop_style_border.asp
//https://www.w3schools.com/jsref/met_node_insertbefore.asp
// https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

const newDiv = document.createElement("div"); 
newDiv.style.border = "thick solid black"; 
newDiv.style.backgroundColor = "pink";

// another <h1> that says “I’m in a div”
const head1 = document.createElement('h3'); 
head1.textContent = 'I\'m in a div';

newDiv.appendChild(head1);

// a <p> that says “ME TOO!”
const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

newDiv.appendChild(para2);

// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container
// document. < adds content to our html > 
document.body.insertBefore(newDiv, null);

// Syntax
// node.insertBefore(newnode, existingnode)
// Parameter Values
// Parameter 	Type 	Description
// newnode 	Node object 	Required. The node object you want to insert
// existingnode 	Node object 	Required. The child node you want to insert the new node before. If set to null, the insertBefore method will insert the newnode at the end