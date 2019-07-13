let formatTime = (minutes) => {
    let days = Math.floor(minutes / 3600);
    let hours = Math.floor((minutes - (days * 3600)) / 60);
    let minute = minutes - (days * 3600) - (hours * 60);
    return console.log(`${days} days(s) ${hours} hour(s) ${minute} minute(s)`)
}
formatTime(120);
formatTime(59);
formatTime(3601);