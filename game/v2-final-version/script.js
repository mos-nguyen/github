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
    const giveup = document.querySelector('#giveup');

    let attacker;
    let defender;
    let defenderIndex;

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
        attack: [30, 40],
        healing: [10, 20],
        special: [0, 0, 60, 0],
        attackNarrator: [
            'you did 30 points of damage!',
            'Wow! You did 40 points of damage!',
        ],
        healingNarrator: [
            'You got back 10 health points.',
            'Nice! you got back 20 health points',
        ],
        specialNarrator: [
            'Oh...Nothing happened.',
            'Aww, too bad. Your attack didnt hit.',
            'Whoa! You did 60 points of damage!',
            'You didnt do any damage...better luck next time.',
        ],
        defendAttack: [
            'You got hit! 30 points of damage.',
            'Ouch! Thats 40 points of damage!',
        ],
        index: 0
    };

    const thisAttack = Math.floor(Math.random() * 2);
    const thisHealing = Math.floor(Math.random() * 2);
    const thisSpecial = Math.floor(Math.random() * 4);

    const thisDefense = Math.floor(Math.random() * 2);

    attack.addEventListener('click', playerAttack);
    function playerAttack() {
        // console.log('testing');
        narrate.innerHTML = `<p>Player 1, ${gameData.attackNarrator[thisAttack]}</p>`;
    }
    
    heal.addEventListener('click', healPlayer);
    function healPlayer() {
        narrate.innerHTML = `<p>Player 1, ${gameData.healingNarrator[thisHealing]}</p>`;
    }

    special.addEventListener('click', specialAttack);
    function specialAttack() {
        narrate.innerHTML = `<p>Player 1, ${gameData.specialNarrator[thisSpecial]}</p>`;
    }

    if(thisDefense == 0){
        gameData.hp2[defenderIndex] = gameData.hp2[defenderIndex] - gameData.attack[thisAttack];
    }

    let hp2 = Math.floor(parseFloat(gameData.hp2[defenderIndex]));

    if(hp2 < 0) {hp2 = 0;}

    document.querySelector(`#p2health${defenderIndex}`).innerHTML = `${hp2} HP`;

    
   
})();