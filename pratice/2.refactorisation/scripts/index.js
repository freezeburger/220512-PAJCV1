




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

