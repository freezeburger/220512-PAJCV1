
function updateDom(users){
    debugger;
    console.time('updateDom');
    var ul = document.createElement('ul');

    for (let u = 0; u < users.length; u++) {
        const element = '<li>' + users[u] + '</li>';
        ul.innerHTML += element;
    }

    document.querySelector('fieldset').appendChild(ul);
    console.timeEnd('updateDom');
    console.timeEnd('fetch');
}


function consumer(data){
    console.groupCollapsed('Data from Server');
    console.table(data);
    console.groupEnd();

    updateDom(data.users);
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
    console.time('fetch');

    fetch(URL).then(res => res.json()).then(consumer);
}