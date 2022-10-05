var pattren = [];
var user_pattren = [];
var level = 0;
var map1 = { 0:"green", 1:"red", 2:"yellow", 3:"blue" };
var map2 = { "green":0, "red":1, "yellow":2, "blue":3 };

$(document).on("keydown",function(){
    startGame();
});

$(".btn").on("click",function(){
    var temp = $(this);
    temp.addClass("pressed");
    setTimeout(function(){
        temp.removeClass("pressed");
    },100);
    var colour = temp.attr("id");
    user_pattren.push(map2[colour]);
    check();
});

function startGame(){
    setTimeout(function(){
        var num = Math.floor(Math.random()*4);
        pattren.push(num);
        level++;
        $("h1").text("Level "+level);
        $("#"+map1[num]).addClass("pressed");
        setTimeout(function(){
            $("#"+map1[num]).removeClass("pressed");
        },500);
    },1000);
}

function check(){
    var last = user_pattren.length;
    if(user_pattren[last-1]!=pattren[last-1] || pattren.length==0){
        pattren = [];
        user_pattren = [];
        level = 0;
        $("h1").text("Game over, press any key to restart the game");
    }else if(last==pattren.length){
        user_pattren = [];
        startGame()
    }
}