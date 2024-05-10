function updateDays() {
    let date = new Date("17 June,2024").getTime();
    let today = new Date().getTime();
    let result = date - today;
    let sec = Math.floor(result / (1000) % 60);
    let min = Math.floor(result / (1000 * 60) % 60);
    let hour = Math.floor(result /  (1000 * 60 * 60) % 24);
    let days = Math.floor(result / (1000 * 60 * 60 * 24));

    // let hour = Math.floor(cal / (1000 * 60 * 60) % 24);
    // let min = Math.floor(cal / (1000 * 60) % 60);
    // let sec = Math.floor(cal / (1000) % 60);
    // let day = Math.floor(cal / (1000 * 60 * 60 * 24) % 30);
    
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('min').innerHTML = min;
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('days').innerHTML = days;

}

setInterval(updateDays,1000)

// function updateDays() {
//     let date = new Date("17 June,2024").getTime();
//     let today = new Date().getTime();
//     let cal = date - today;
//     let hour = Math.floor(cal / (1000 * 60 * 60) % 24);
//     let min = Math.floor(cal / (1000 * 60) % 60);
//     let sec = Math.floor(cal / (1000) % 60);
//     let day = Math.floor(cal / (1000 * 60 * 60 * 24) % 30);
//     let month = Math.floor(cal / (1000 * 60 * 60 * 24 * 30))

//     // let dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', "Fri",]
//     document.getElementById('month').innerHTML = "Month: " + month;
//     document.getElementById('days').innerHTML = "Days: " + day;
//     document.getElementById('hours').innerHTML = "Hours: " + hour;
//     document.getElementById('min').innerHTML = "Min: " + min;
//     document.getElementById('sec').innerHTML = "Sec: " + sec;




// }setInterval(updateDays,1000)