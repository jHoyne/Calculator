function date_timer() {
    var curDate = new Date();
    document.getElementById('clockCT').innerHTML = curDate;
    setInterval(date_timer(), 1000);
}