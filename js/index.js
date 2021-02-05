// var container = document.querySelector("#root");
// console.log(root);
// var card = document.createElement("div");
// card.setAttribute("id","card");
// container.appendChild(card);
// //sub-child of parent.
// var image = document.createElement("img");
// image.src = "images/pi.webp";
// image.alt = "image";
// card.appendChild(image);
// var n = document.createElement("h4");
// n.textContent = "Chenna Kesav";
// card.appendChild(n);
// var em = document.createElement("p");
// em.textContent = "kchennu7@gmail.com";
// card.appendChild(em);
// var mobile = document.createElement("h6");
// mobile.textContent = "8965470682";
// card.appendChild(mobile);
// var b = document.createElement("button");
// b.textContent = "Send"
// b.setAttribute("class","button");
// card.appendChild(b);
var loadJSON=(file,callback)=>{
    var ajax = new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            callback(ajax.responseText);
        }
    }
    ajax.send();
}
loadJSON("json/data.json",function(text){
    var d = JSON.parse(text);
    console.log(d);
    details(d.details);
    other(d.multipleData);
})

var root = document.getElementById("root");
function details(cse){
  var n = document.createElement("h1");
  n.setAttribute("class","name");
  n.textContent = cse.name;
  root.appendChild(n);
  var n1 = document.createElement("p");
  n1.setAttribute("class","name");
  n1.textContent = cse.mobile;
  root.appendChild(n1);
}
function other(r){
  var ul = document.createElement("ul");
  root.appendChild(ul);
  for(let i = 0; i < r.length; i++){
      var li = document.createElement("li");
      //li.style.fontSize = "20px";
      li.textContent = r[i].name;
      ul.appendChild(li);
      var li1 = document.createElement("li");
      li1.textContent = r[i].mobile;
      ul.appendChild(li1);
  }
}



