
let clock = document.getElementById("clock");


function timer() {
	let time = new Date(),
	    hour = time.getHours().toString(),
	    minutes = time.getMinutes().toString(),
	    seconds = time.getSeconds().toString();


	if (hour.length < 2) {
		hour = "0" + hour;
	}
	if (minutes.length < 2) {
		minutes = "0" + minutes;
	}
	if (seconds.length < 2) {
		seconds = "0" + seconds;
	}


	let clockString = hour + ":" + minutes + ":" + seconds;

    clock.textContent = clockString;
    
}

timer();
setInterval(timer, 1000);