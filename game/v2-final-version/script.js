(function() {

    'using strict';
    console.log('reading js')

    let play = document.querySelector('.play');
    let startol = document.querySelector('#ol-start');
    let after = document.querySelector('#afterplay');

    play.addEventListener('click', function(){
        startol.className = 'hidden';
        after.classList.remove('hidden');
    })

    const player1 = document.querySelector('#player1');
    const player2 = document.querySelector('#player2');
    const narrator = document.querySelector('#narrator');
    const attack = document.querySelector('#attack');
    const heal = document.querySelector('#heal');
    const special = document.querySelector('#special');
    const giveup = document.querySelector('#giveup')

     

    giveup.addEventListener('click', function(){  // FOR THE GIVING UP BUTTON
        if(confirm('Are you sure? Giving up will restart the entire game.')) {
            after.className = 'hidden';
            startol.classList.remove('hidden');
        } 
    })
    //==============================================================
    
    const gameData = {
        players: ['player1', 'player2'],
        health: [100, 100],
        attack: [20, ]
    }

})()