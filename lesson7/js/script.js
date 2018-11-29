
let clock = document.getElementById("clock");


function timer() {
	let time = new Date(),
	    hour = time.getHours().toString(),
	    minutes = time.getMinutes().toString(),
	    seconds = time.getSeconds().toString();

    let r = Math.round(hour * 11.087).toString(16),
	    g = Math.round(minutes * 4.32).toString(16),
		b = Math.round(seconds * 4.32).toString(16);

	if (hour.length < 2) {
		hour = "0" + hour;
	}
	if (minutes.length < 2) {
		minutes = "0" + minutes;
	}
	if (seconds.length < 2) {
		seconds = "0" + seconds;
	}

	if (r.length === 1) {
		r = "0" + r;
	}
	if (g.length === 1) {
		g = "0" + g;
	}
	if (b.length === 1) {
		b = "0" + b;
	}

	let clockString = hour + ":" + minutes + ":" + seconds;

    clock.textContent = clockString;
    
}

timer();
setInterval(timer, 1000);