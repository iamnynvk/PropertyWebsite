console.log("Welcome to OwnProperty.com");

// not working
// let json = require('./data.json');
// console.log(json, 'the json obj');

function readTextFile(file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", file, true);
    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status == "200") {
            callback(xhr.responseText);
        }
    }
    xhr.send(null);
}

readTextFile("./data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    console.log(typeof data);
});




