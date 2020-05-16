
//Create a variable to store all teams
chrome.tabs.executeScript(null, {code: "var stored"});

function backup(){
stored = '';
//makes the stored variable global so that the code in backup.js will run properly
chrome.tabs.executeScript(null, {code: "window.stored = window.localStorage.getItem('showdown_teams')"});
chrome.tabs.executeScript(null, {file: "backup.js"}, function(){});
}







document.addEventListener('DOMContentLoaded', function (){
var backupButton = document.getElementById('backup');
backupButton.addEventListener('click', backup);
});

document.addEventListener('DOMContentLoaded', function (){
    var restoreButton = document.getElementById('restore');
    restoreButton.addEventListener('click', restoreText);
    });




function restoreText(){
        var file = document.getElementById('restoreFile').files[0];
            
            
            var fileReader = new FileReader();
                fileReader.onload = function(){
                    var fileResult 
                    
                    fileResult = fileReader.result;
                    //localstorage keys will only accept strings, so the text that is uploaded has to be stringified to work
                    chrome.tabs.executeScript(null, {code: "window.localStorage.setItem('showdown_teams'" + "," + JSON.stringify(fileResult) + ")" });
                    return fileResult
                }
                fileReader.readAsText(file)
               

            
    } 
    
