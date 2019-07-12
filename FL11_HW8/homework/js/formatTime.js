function formatTime(a) {
	var days = Math.trunc(a / 1440);
	var hours = Math.trunc((a % 1440) / 60);
	var min = a % 60;
	var message = `${days} day(s) ${hours} hour(s) ${min} minute(s).`;
	return message;
}
formatTime(3601);
