
$.fn.sanitize = function(){
    this.text(  $('<div>').text( this.text() ).html() )
    return this;
}

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
        // const user = USERLIST.find( user => user.id == message.userId );
        // $messageList.append( createTemplateMessage( user?.name, message) );

        // Déplace la responsabilité de la manipulation de données
        $messageList.append( createTemplateMessage( message.user?.name, message) );
    } )
}

const $defaultOptions =  $('<option>').text('Choisir un utilisateur');

function updateInterfaceUsers(users){

    const $select = $('.browser-default');

    $select.empty().append(  $defaultOptions );
    $.each( users, (n,user)=> $select.append( $('<option>').val(user.id).text(user.name) ) );
}

function updateProgressbar( time ){

        const waitingTime = 1000;

        const $progressBar = $('#progressBar');

        $progressBar.css('width', '-50%')
            .delay( waitingTime )
            .animate({
                width:'100%',
            }, time - waitingTime);
       
}

function setProgress( percent = 0 ){
    $('#progressBar').css('width', percent + '%');
}

function reloadByInterval( time = 1500 ){
    setInterval( () => {
        getMessages(
            setProgress,
            setProgress
        ).then( updateInterfaceMessages );
        // updateProgressbar(time);
    }, time );
}



function speak( words){
    const sentence = new SpeechSynthesisUtterance( words );
    window.speechSynthesis.speak( sentence );
}