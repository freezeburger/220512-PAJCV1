



function consumer(data){
    console.groupCollapsed('Data from Server');
    console.table(data);
    console.groupEnd();
}

var URL = 'http://localhost:3000/theory/2.ajax/data.json';

function getDataWithXHR(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();
    // Utilisation de l'évennement onload
    xhr.onload = () => consumer(JSON.parse(xhr.responseText));
}

function getDataWithFetch(){
    // Promise
    fetch(URL).then(res => res.json()).then(consumer);
}