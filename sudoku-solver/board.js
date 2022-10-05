var inputs = document.querySelectorAll("td");
for(var i=27;i<36;i++){
    inputs[i].classList.add("top-border");
}
for(var i=54;i<63;i++){
    inputs[i].classList.add("top-border");
}
for(var i=0;i<9;i++){
    inputs[i*9 + 2].classList.add("right-border");
}
for(var i=0;i<9;i++){
    inputs[i*9 + 5].classList.add("right-border");
}