function getDate() {
    var datefield = document.getElementById('today_date');
    var date = new Date();
    var today_date = date.getDate();

    var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var day = new Array('Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday');
    var today_day = day[date.getDay()];
    var today_month = month[date.getMonth()];
    datefield.innerHTML = today_day + ', '+today_month+' '+today_date;
}