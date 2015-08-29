function date_timer() {
    var curDate = new Date();
    document.getElementById('clockCT').innerHTML = curDate;
    setTimeout(date_timer(), 1000);
}