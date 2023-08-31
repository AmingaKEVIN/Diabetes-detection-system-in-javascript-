const urinecolor = document.getElementById('urine-color');

const textcomment= document.getElementById('urinecolor');

const temperature = document.getElementById('temperature')

const textcomment2 = document.getElementById('temp')

function rinecolor(){
    if(urinecolor.value=="yellow")
    {
textcomment.innerText="Your diabetes levels are up please see a doctor"
    }else{
        textcomment.innerText="Your diabetes levels are normal"
    }
}

function temperature1(){
    if(temperature.value> 38){
        textcomment2.innerText="Diabetes levels are up please see a doctor "
    }else{
        textcomment2.innerText="Your diabetes levels are normal"
    }
}