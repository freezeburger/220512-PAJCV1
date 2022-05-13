
/**
 * Interface for the mini-chat
 * 
 * Liste des messages
 * - titre  
 * - liste des messages
 *    - message
 *    - nom de l'auteur
 * 
 * Formulaire de crétion de message
 *  - champ texte
 *  - liste déroulante des utilisateurs
 *  - bouton envoyer
 * 
 * 
 *  */ 


/**
 * 1. Récupérer les messages à l'initialisation de la page
 * 2. Afficher les messages
 * 
 * 3. Récupérer les utilisateurs  à l'initialisation de la page
 * 4. Afficher les utilisateurs dans la liste des utilisteurs
 * 
 * 5. Récupérer les messages à intervale régulier
 * 6. Actualiser la liste des messages
 * 
 * 7. Envoyer un message
 * 
 * 8. Envoyer un wizz (message contenant wizz dans le texte) - Dit Wizz - secoue l'écran
 * 
 * 9. Supprimer un message
 * 10.  Actualiser la liste des messages
 */


const URL = 'http://a945-2a01-e0a-b0f-bb00-c92e-9434-6f5c-8f6d.ngrok.io/';

const USERLIST = [];


function getUsers(){
    // Retourne la PROMESSE de liste de tous les utilisateurs
    return $.ajax(URL + 'users').then( users =>{
        USERLIST.push(...users);
        return users;
    })
}

function getMessages(){
     // Retourne la PROMESSE de liste de tous les messages
     return $.ajax(URL + 'messages', {
        xhr(){
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('progress', (e)=>{
                const percent = Math.round(e.loaded / e.total * 100);
                $('#progressBar').css('width', `${percent}%`)
            })
            return xhr;
        },
        beforeSend () {
            $('#progressBar').css('width', `0%`)
        }
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
    //  Envoie un message
    console.warn('sendMessage');

    const content = $('#contentMessage').val();
    const userId = $('.browser-default').val();

    const payload = {userId, content}
    $.post(URL + 'messages', payload).then( () => getMessages().then( updateInterfaceMessages ) )

    //debugger;
}

function sendWizz(){
    //  Envoie un wizz
}

//---------------------------
$.fn.sanitize = function(){
    this.text(  $('<div>').text( this.text() ).html() )
    return this;
}

//---------------------------

function createTemplateMessage( username, message){
    return $(`
        <li class="collection-item avatar">
            <img src="https://ui-avatars.com/api/?name=${username}" alt="" class="circle">
            <span class="title">${username}</span>
            <!-- <p>${$('<div>').sanitize().text(message.content).html() }</p> -->
            ${ $('<p>').text(message.content).sanitize().prop('outerHTML') }
            <a href="#!" class="secondary-content" onclick="deleteMessageById(${message.id})"><i class="material-icons">close</i></a>
        </li>
    `)
}

function updateInterfaceMessages(messages){

    const $messageList = $('#messages-list');

    $messageList.empty();

    $.each( messages, (n,message)=>{
        const user = USERLIST.find( user => user.id == message.userId );
        $messageList.append( createTemplateMessage( user?.name, message) );
    } )

}

const $defaultOptions =  $('<option>').text('Choisir un utilisateur');

function updateInterfaceUsers(users){

    const $select = $('.browser-default');

    $select.empty().append(  $defaultOptions );
    $.each( users, (n,user)=> $select.append( $('<option>').val(user.id).text(user.name) ) );
}

//---------------------------


function updateProgressbar( time ){

        const waitingTime = 1000;

        const $progressBar = $('#progressBar');

        $progressBar.css('width', '-50%')
            .delay( waitingTime )
            .animate({
                width:'100%',
            }, time - waitingTime);
       
}

function reloadByInterval( time = 1500 ){
    setInterval( () => {
        getMessages().then( updateInterfaceMessages );
        //updateProgressbar(time);
    }, time );
}

function speak( words){
    const sentence = new SpeechSynthesisUtterance( words );
    window.speechSynthesis.speak( sentence );
}

function initializeInterface(){
  
    // $('body').hide().removeAttr('hidden').fadeIn( 1500 );
   //  $('body').one('click', ()=> speak('wizz') );

   $( () => getUsers()
                .then( updateInterfaceUsers )
                .then( getMessages )
                .then( updateInterfaceMessages )
                .then(
                    $('body').hide().removeAttr('hidden').fadeIn( 1500 )
                ).then(
                    reloadByInterval
                )
         );

   // $( () => getMessages().then( updateInterfaceMessages ) );


   // Bouotn d'envoie de message
   $('body > footer > div.col.s1 > a').click(sendMessage)
}

// window.onload = initializeInterface;
$(initializeInterface);

