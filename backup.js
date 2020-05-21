var dateVar = new Date();
var date = dateVar.getDate();
if (date < 10){
    date = '0' + date;
}

var month = dateVar.getMonth() + 1;
if (month < 10){
    month = '0' + month;
}

var seconds = dateVar.getSeconds();
if (seconds < 10){
    seconds = '0' + seconds;
}

var minutes = dateVar.getMinutes();
if (minutes < 10){
    minutes = '0' + minutes;
}

var hours = dateVar.getHours();
if (hours < 10){
    hours = '0' + hours;
}

var time = hours + '-' +  minutes + '-' + seconds;

var fullDate = dateVar.getFullYear() + '-' + month + '-' + date;

var teamFilename = 'Teams' + ' ' + fullDate + '--' + time;

download(teamFilename, stored);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
    }