let count = 0;
function increament(){
    if(count>=10){
        document.getElementById("count-number").innerHTML = "Sorry! The Limit has crossed!";
    }else{
        count++;
        document.getElementById("count-number").innerHTML = count;
    }
}

let history = document.getElementById("string-history");
function save(){
    history.innerHTML+=" -> "+count;
    count = 0;
    document.getElementById("count-number").innerHTML = count;
}