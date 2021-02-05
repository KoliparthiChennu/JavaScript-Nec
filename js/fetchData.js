fetch('json/data.json')
  .then(response => response.json())
  .then(d => {
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