(function() {

    'using strict';
    console.log('reading js')

    let play = document.querySelector('.play');
    let startol = document.querySelector('#ol-start');
    let after = document.querySelector('#afterplay');

    const giveup = document.querySelector('#giveup')

    play.addEventListener('click', function(){
        startol.className = 'hidden';
        after.classList.remove('hidden');
    })

    giveup.addEventListener('click', function(){  // FOR THE GIVING UP BUTTON
        if(confirm('Are you sure? Giving up will restart the entire game.')) {
            location.reload();
            // after.className = 'hidden';
            // startol.classList.remove('hidden');
        } 
    })
    //==============================================================
    
    const player1 = document.querySelector('#player1');
    const player2 = document.querySelector('#player2');
    const messages = document.querySelector('#messages');
    const attack = document.querySelector('#attack');
    const heal = document.querySelector('#heal');
    // const special = document.querySelector('#special');

    let attacker;
    let defender;
    let defenderIndex;

    const gameData = {
        players: ['player1', 'player2'],
        health: [100, 100],
        attack: [30, 35],
        heal: [10, 20],
        // special: [0, 0, 100, 0],
        attackMessage: [
            'got a hit in! 40 points of damage!',
            'got a super strong hit, 50 points of damage!'
        ],
        healMessage: [
            'found an apple. Plus 20 health points!',
            'found a plate of spagetti. Plus 30 health points!'
        ],
        // specialMessage: [
        //     'slipped a bit while attacking. 0 points of damage.',
        //     'got lost in the sauce...0 points of damage.',
        //     'locked in. 100 points of damage, critial hit!',
        //     'was distracted. 0 points of damage.'
        // ],
        defendMessage: [
            'Ouch! that hurt!',
            'OW! That really hurt!'
        ],
        index: 0
    };

    attack.addEventListener('click', playerAttack);
    heal.addEventListener('click', playerHeal);
    // special.addEventListener('click', playerSpecial);

    function playerAttack(){
        if(gameData.index){
            attacker = gameData.players[1];
            defender = gameData.players[0];
            defenderIndex = 0;
        }
        else {
            attacker = gameData.players[0];
            defender = gameData.players[1];
            defenderIndex = 1;
        }

        const thisAttack = Math.floor(Math.random() * 2);
        const thisDefense = Math.floor(Math.random() * 2);

        document.querySelector(`#${attacker}`).className = `attack${thisAttack}`;

        messages.innerHTML = `<p class ="narrate">${attacker} has ${gameData.attackMessage[thisAttack]}</p>`;

        setTimeout(function(){
            messages.innerHTML = `<p class="narrate">${defender} got hit! ${gameData.defendMessage[thisDefense]}</p>`;

            document.querySelector(`#${defender}`).className = `defend${thisDefense}`;

            if(thisDefense == 0){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack];
            } else if(thisDefense == 1){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack];
            }

            let health = Math.floor(parseFloat(gameData.health[defenderIndex]));

            if(health < 0) {health = 0;}

            document.querySelector(`#healthbar${defenderIndex} div`).style.width = `${health}%`;

            document.querySelector(`#playerhealth${defenderIndex}`).innerHTML = `${health}%`;

            checkWinningCondition(defenderIndex, attacker);
        }, 2500);
    }
 // ==========================================================
    function playerHeal(){
        if(gameData.index){
            attacker = gameData.players[1];
            defender = gameData.players[0];
            defenderIndex = 0;
            attackerIndex = 1;
        }
        else {
            attacker = gameData.players[0];
            defender = gameData.players[1];
            defenderIndex = 1;
            attackerIndex = 0;
        }

        const thisHeal = Math.floor(Math.random() * 2);
        const thisHealing = Math.floor(Math.random() * 2);

        document.querySelector(`#${attacker}`).className = `heal${thisHeal}`;

        messages.innerHTML = `<p class ="narrate">${attacker} has ${gameData.healMessage[thisHeal]}</p>`;

        setTimeout(function(){
            // messages.innerHTML = `<p class="narrate">${defender} got hit! ${gameData.defendMessage[thisDefense]}</p>`;

            // document.querySelector(`#${defender}`).className = `defend${thisDefense}`;

            if(thisHealing == 0){
                gameData.health[attackerIndex] = gameData.health[attackerIndex] + gameData.heal[thisHeal];
            } else if(thisHealing == 1){
                gameData.health[attackerIndex] = gameData.health[attackerIndex] + gameData.heal[thisHeal];
            }

            let health = Math.floor(parseFloat(gameData.health[attackerIndex]));

            if(health < 0) {health = 0;}

            document.querySelector(`#healthbar${attackerIndex} div`).style.width = `${health}%`;

            document.querySelector(`#playerhealth${attackerIndex}`).innerHTML = `${health}%`;

            checkWinningCondition(attackerIndex, attacker);
        }, 2500);
    }
// ===========================================================
    function checkWinningCondition(enemy, attackingPlayer){
        setTimeout(function(){
            const health = Math.floor(parseFloat(gameData.health[enemy]));

            if(health < 1 ){
                messages.innerHTML = `<p class="narrate>${attackingPlayer} has won the fight! Restart for another Fight.</p>`;

                messages.innerHTML += '<button id="reset">Play Again?</button>';

                document.querySelector('#reset').addEventListener('click', function(){
                    location.reload();
                });
            } else {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                messages.innerHTML = `<p class="narrate">It's now ${gameData.players[gameData.index]}'s turn!</p>`;
            }
        }, 3000);
    }

})();