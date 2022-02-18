function setTime(){
    var getTime = new Date();
    var hr = getTime.getHours();
    var min =getTime.getMinutes();
    var sec = getTime.getSeconds();
    var seccion = document.getElementById('seccion');

    if (hr>=12){
        seccion.innerHTML = 'PM';
    }
    else{
        seccion.innerHTML = 'AM'
    }


    if(hr >12){
        hr = hr - 12;
    }

document.getElementById('hour') .innerHTML =hr;
document.getElementById('minit').innerHTML =min;
document.getElementById('seconds').innerHTML=sec;

}
setInterval(setTime ,10)
