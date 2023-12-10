var overlay1 = document.querySelector(".overlay1");
var popup = document.querySelector(".popup-box");

var finalbtn = document.querySelector(".btn1");

finalbtn.addEventListener("click", function() {
    overlay1.style.display = "block";
    popup.style.display = "block";
});

var cancel = document.getElementById("cancel");
cancel.addEventListener("click", function(event) {
    event.preventDefault();
    overlay1.style.display = "none";
    popup.style.display = "none";
})

var container = document.querySelector(".container");
var booktitle = document.getElementById("input1");
var bookauthor = document.getElementById("input2");
var bookarea = document.getElementById("text");
var addbtn = document.getElementById("adding");

addbtn.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "bookcontainer");
    div.innerHTML = `<h1>${booktitle.value}</h1> 
    <h3>${bookauthor.value}</h3>
    <p>${bookarea.value}</p>
    <button class="btn" onclick="del(event)">delete</button>`
    container.append(div);
    overlay1.style.display = "none";
    popup.style.display = "none";
})

function del(event) {
    event.target.parentElement.remove();
}