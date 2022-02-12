var dob = document.querySelector(".dob");
var number = document.querySelector(".lukynum");
var btn = document.querySelector(".btn")
var message = document.querySelector(".message")

btn.addEventListener("click",lucky);

function lucky(){
    var number1 = parseInt(number.value);
    console.log(number1)
    console.log(dob.value)
    var dobstr = dob.value;
    var dob1 = ""
    for(var i=0;i<dobstr.length;i++){
        if(i>=0 && i<=7){
            continue
        }
        else{
            dob1+=dobstr[i].toString();
        }
    }
    console.log(dob1)
    
    var dobnum = parseInt(dob1)
    console.log(dobnum)
    if(number1%dobnum===0){
        message.innerText="Your birthday is lucky!!"
    }
    else{
        
        message.innerText="Your birthday is not so lucky..."
    }
}