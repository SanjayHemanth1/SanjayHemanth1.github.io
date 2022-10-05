document.querySelector("#solve").addEventListener("click",solution);

function solution(){
    var inputs = document.querySelectorAll("td input");

    //storing all the input value as matrix
    var arr = [];
    for(var i=0;i<9;i++){
        var temp = [];
        for(var j=0;j<9;j++){
            temp.push(inputs[i*9 + j].value);
        }
        arr.push(temp);
    }

    //Checking if the entered sudoku is valid or not
    //if not valid give an alert
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(arr[i][j].length!=0){
                if(!check(i,j,arr)){
                    alert("Puzzle Entered is Not Valid");
                    return;
                };
            }
        }
    }
    var queue = [];
    var result = solve(arr,0,queue);
    var map = {
        4:1,
        3:10,
        2:100,
        1:200,
    }
    var speed = document.querySelector("#speed").value;
    if(result){
        if(speed==5){
            for(var i=0;i<9;i++){
                for(var j=0;j<9;j++){
                    inputs[i*9 + j].value = arr[i][j]; 
                }
            }
            setTimeout(function(){
                alert("Puzzle Solved");
            },200);
        }else{
            displayProcess(queue,map[speed],speed);
        }
    }else{
        alert("puzzle is unsolvable");
    }
}

function check(row,col,arr){

    var num = arr[row][col];
    //checking the row
    for(var i=0;i<9;i++){
        if(i!=col && arr[row][i]===num) return false;
    }
    //checking the column
    for(var i=0;i<9;i++){
        if(i!=row && arr[i][col]===num) return false;
    }
    //checking the 3*3 box
    var x = Math.floor(row/3)*3;
    var y = Math.floor(col/3)*3;
    for(var i=x;i<x+3;i++){
        for(var j=y;j<y+3;j++){
            if(!(i==row && j==col) && arr[i][j]===num) return false;
        }
    }
    return true;
}

// this is the actual backtracking algorithm sudoku
function solve(arr,curr,queue){
    if(curr==81) return true;
    var row = Math.floor(curr/9);
    var col = curr%9;
    if(arr[row][col]!="") return solve(arr,curr+1,queue);
    for(var i=1;i<10;i++){
        arr[row][col] = i.toString();
        if(check(row,col,arr)){
            queue.push([curr,i.toString()]);
            if(solve(arr,curr+1,queue)){
                return true;
            }
        }
        arr[row][col] = "";
        queue.push([curr,""]);
    }
    return false;
}

function displayProcess(queue,speed,range){

    document.querySelector("#progress-border").style.display = "block";
    document.querySelector("#progress-bar").style.display = "block";
    document.querySelector("#sample-puzzle").disabled = true;
    document.querySelector("#clear").disabled = true;
    document.querySelector("#solve").disabled = true;
    document.querySelector("#speed").disabled = true;

    var inputs = document.querySelectorAll("td input");
    var curr_steps = 0;
    var total_steps = queue.length;

    var start = setInterval(function() {
        if(queue.length==0){
            document.querySelector("#sample-puzzle").disabled = false;
            document.querySelector("#clear").disabled = false;
            document.querySelector("#solve").disabled = false;
            document.querySelector("#speed").disabled = false;
            clearInterval(start);
            setTimeout(function(){
                alert("Puzzle Solved");
            },500);
        }else if(range!=1){
            for(var i=0;i<10*range && queue.length!=0;i++){
                var temp = queue.shift();
                inputs[temp[0]].value = temp[1];
                curr_steps++;
                document.querySelector("#progress-bar").style.width = ((curr_steps/total_steps)*100).toString() + "%";
            }
        }else{
            var temp = queue.shift();
            inputs[temp[0]].value = temp[1];
            curr_steps++;
            document.querySelector("#progress-bar").style.width = ((curr_steps/total_steps)*100).toString() + "%";
        }
    },speed);
}