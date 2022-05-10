let fullName = prompt("Adinizi yaziniz");
document.querySelector("#myName").innerHTML = fullName;

function showTime(){
    let date = new Date();
    let localeString = date.toLocaleString();
    let today = date.getDay();
    let day;
    switch(today){
        case 0 :
            day = "Pazar"
        break;
        case 1 :
            day = "Pazartesi"
        break;
        case 2 :
            day = "Salı"
        break;
        case 3 :
            day = "Çarşamba"
        break;
        case 4 :
            day = "Perşembe"
        break;
        case 5 :
            day = "Cuma"
        break;
        case 6 :
            day = "Cumartesi"
        break;
    }
    document.querySelector("#myClock").innerHTML = `${localeString} ${day}`
}

showTime();
setInterval(showTime,1000);
