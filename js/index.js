var container = document.querySelector("#root");
console.log(root);
var card = document.createElement("div");
card.setAttribute("id","card");
container.appendChild(card);
//sub-child of parent.
var image = document.createElement("img");
image.src = "images/pi.webp";
image.alt = "image";
card.appendChild(image);
var n = document.createElement("h4");
n.textContent = "Chenna Kesav";
card.appendChild(n);
var em = document.createElement("p");
em.textContent = "kchennu7@gmail.com";
card.appendChild(em);
var b = document.createElement("button");
b.textContent = "Send"
b.setAttribute("class","button");
card.appendChild(b);



