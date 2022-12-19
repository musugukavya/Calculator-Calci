//To display number
function number(num){
    var result=document.getElementById("input");
    result.value+=num;
}

//To get result
function result(){
    var result=document.getElementById("input");
    result.value=eval(result.value);
}

//To clear result
function clearResult(){
    var result=document.getElementById("input");
    result.value="";
}

//To delete one char
function deleteChar(){
    var number=document.getElementById("input");
    var remove=number.value;
    remove =remove.slice(0,-1); //to remove last character
    number.value= remove;
}