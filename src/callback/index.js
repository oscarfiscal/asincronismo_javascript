
function  sum (num1,num2){
    return num1+num2;
}

function calc (num1,num2,callback){ //callback is a function
    return callback(num1,num2); //callback function is called|
}
console.log(calc(2,3,sum));


function date(callback){
    console.log(new Date());
    setTimeout(function(){
     let date = new Date 
     callback(date);
        }
    ,2000);
}   

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);    