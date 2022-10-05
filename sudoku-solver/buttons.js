document.querySelector("#clear").addEventListener("click",function(){
    var inputs = document.querySelectorAll("td input");
    for(var i=0;i<81;i++){
        inputs[i].value = "";
    }
    document.querySelector("#progress-border").style.display = "none";
    document.querySelector("#progress-bar").style.display = "none";
});

document.querySelector("#sample-puzzle").addEventListener("click",function(){
    var inputs = document.querySelectorAll("td input");
    var arr = [
        "5","3", "", "","7", "", "", "", "",
        "6", "", "","1","9","5", "", "", "",
         "","9","8", "", "", "", "","6", "",
        "8", "", "", "","6", "", "", "","3",
        "4", "", "","8", "","3", "", "","1",
        "7", "", "", "","2", "", "", "","6",
         "","6", "", "", "", "","2","8", "",
         "", "", "","4","1","9", "", "","5",
         "", "", "", "","8", "", "","7","9"
        ];
    for(var i=0;i<81;i++) inputs[i].value = arr[i];
    document.querySelector("#progress-border").style.display = "none";
    document.querySelector("#progress-bar").style.display = "none";
});
