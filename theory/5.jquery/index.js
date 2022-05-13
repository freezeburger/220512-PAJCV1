

var URL = 'http://localhost:3000/theory/5.jquery/data.json';

/* function updateDom(users){
    console.log(users);
    $.each(users, (n,user) => $('fieldset').append( `<li>${user}</li>` ) )
}

function consumer(data){
    updateDom(data.users)
}

function getDataWithXHR(){
    $.ajax(URL).then(consumer)
}

function getDataWithFetch(){
    $.ajax(URL).then(consumer)
} */


const getDataWithXHR = getDataWithFetch = () => $.ajax(URL)
                    .then( 
                         // data =>  $.each(data.users, (n,user) => $('fieldset').append( `<li>${user}</li>` ) ) 
                         // data =>  $.each(data.users, (n,user) => $('fieldset').append( $(`<li>${user}</li>`).hide().fadeIn( n * 500 )  ) ) 
                         data =>  $.each(data.users, (n,user) => $('fieldset').append( $(`<li>${user}</li>`).hide().fadeIn( n * 500 )  ) ) 
                    );