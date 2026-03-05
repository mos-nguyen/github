(function(){
    'use strict';
    console.log('reading js')

    const closeBtn = document.querySelectorAll('.close');
    const openPoster = document.querySelectorAll('.open');

    for (const eachBtn of closeBtn) {
        eachBtn.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    document.querySelector('#sua').addEventListener('click', function(event){
        // console.log('over sua');
        event.preventDefault();
        document.querySelector('#ol-sua').className = 'overlay showing'
    });

    document.querySelector('#demon').addEventListener('click', function(event){
        // console.log('over sua');
        event.preventDefault();
        document.querySelector('#ol-demon').className = 'overlay showing'
    });

    document.querySelector('#robot').addEventListener('click', function(event){
        // console.log('over robot');
        event.preventDefault();
        document.querySelector('#ol-robot').className = 'overlay showing'
    });

    document.querySelector('#angel').addEventListener('click', function(event){
        // console.log('over angel');
        event.preventDefault();
        document.querySelector('#ol-angel').className = 'overlay showing'
    });

    document.querySelector('#pink').addEventListener('click', function(event){
        // console.log('over pink');
        event.preventDefault();
        document.querySelector('#ol-pink').className = 'overlay showing'
    });

    document.querySelector('#ghost').addEventListener('click', function(event){
        // console.log('over ghost');
        event.preventDefault();
        document.querySelector('#ol-ghost').className = 'overlay showing'
    });
    
})();