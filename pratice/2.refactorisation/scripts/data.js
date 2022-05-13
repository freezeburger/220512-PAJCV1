
const URL = 'http://a945-2a01-e0a-b0f-bb00-c92e-9434-6f5c-8f6d.ngrok.io/';

const USERLIST = [];

function getUsers(){
    return $.ajax(URL + 'users').then( users =>{
        USERLIST.push(...users);
        return users;
    })
}

function getMessages( onStart, onProgress ){

    const options ={
        xhr(){
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('progress', (e)=>{
                 // CALLBACK
                 const percent = Math.round(e.loaded / e.total * 100);
                 if(onProgress) onProgress(percent);
            })
            return xhr;
        },
        beforeSend () {
            // CALLBACK 
            if(onStart) onStart();
        }
      }

     return $.ajax(URL + 'messages', options)
     .then( messages =>{
        $.each( messages, (index, msg) => {
            msg.user = USERLIST.find( user => Number(user.id) === Number(msg.userId) );
        })
        return messages;
     })
}
      
      

function deleteMessageById( id ){
    const options = {
        url : URL + '/messages' + id,
        type : 'DELETE'
    }

    $ajax(options).then( () => getMessages().then( updateInterfaceMessages ) )
}

function sendMessage( ){
    console.warn('sendMessage');

    const content = $('#contentMessage').val();
    const userId = $('.browser-default').val();

    const payload = {userId, content}
    $.post(URL + 'messages', payload).then( () => getMessages().then( updateInterfaceMessages ) )

}















/* 
function getMessages(){
    return $.ajax(URL + 'messages',  {
       xhr(){
           const xhr = new XMLHttpRequest();
           xhr.addEventListener('progress', (e)=>{
               const percent = Math.round(e.loaded / e.total * 100);
               $('#progressBar').css('width', `${percent}%`)
           })
           return xhr;
       },
       beforeSend () {
           // CALLBACK
       }
     })

     
     USERLIST.find( user => user.id == message.userId );
} */