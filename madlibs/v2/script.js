(function(){

    'use strict';
    console.log('reading js');

    const comic = document.querySelector('#product');
    const allSection = document.querySelectorAll('section');
    const form = document.querySelector('form');

    document.querySelector('#begin').addEventListener('click', function() {
        allSection[0].className = "hidden";
        allSection[1].className = "showing choose-2";
    });

    document.querySelector('#next').addEventListener('click', function() {
        allSection[1].className = "hidden";
        allSection[2].className = "showing type-3";
    });

    document.querySelector('#pgnext').addEventListener('click', function() {
        allSection[2].className = "hidden";
        allSection[3].className = "showing type-4";
    });

    document.querySelector('#finalpg').addEventListener('click', function() {
        allSection[3].className = "hidden";
        allSection[4].className = "showing story-5";
    });

    document.querySelector('#return').addEventListener('click', function() {
        allSection[4].className = "hidden";
        allSection[0].className = "showing welcome-1";
    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const nouns =document.querySelector('#nouns').value;
        const chooseadj =document.querySelector('#chooseadj').value;
        const location =document.querySelector('#location').value;

        const emotion =document.querySelector('#emotion').value;
        const level =document.querySelector('#level').value;
        const adj =document.querySelector('#adj').value;
        const noun =document.querySelector('#noun').value;
        const fav =document.querySelector('#fav').value;

        const num =document.querySelector('#num').value;
        const num2 =document.querySelector('#num2').value;
        const ocean =document.querySelector('#ocean').value;
        const ocean2 =document.querySelector('#ocean2').value;
        const body =document.querySelector('#body').value;

        let myText;

        if (emotion == '') {
            myText = 'Please provide an emotion.';
            dmocuent.querySelector('#emotion').focus();
            errorMessage.innerHTML = myText;
        } else if (level == '') {
            myText = 'Please provide a Level of difficulty';
            dmocuent.querySelector('#level').focus();
            errorMessage.innerHTML = myText;
        } else if (adj == '') {
            myText = 'Please provide an Adjective';
            dmocuent.querySelector('#adj').focus();
            errorMessage.innerHTML = myText;
        } else if (noun == '') {
            myText = 'Please provide a Level of difficulty';
            dmocuent.querySelector('#noun').focus();
            errorMessage.innerHTML = myText;
        } else if (fav == '') {
            myText = 'Please provide a Level of difficulty';
            dmocuent.querySelector('#fav').focus();
            errorMessage.innerHTML = myText;
        } else {
            myText =`<h1>The <span>(nouns)</span> of the (location)</span></  h1>
            
                <img src="images/comicdone.png" alt="mablibs comic">

                <p class="d1">I'm not too ${emotion} about this next story. My supervisors told me it was (difficulty level), even for them. Even worse, I'm stuck with my (adj) coworker too...</p>

                <p class="d2">UGH! <br>
                This place smells like (noun)!</p>

                <p class="d3">Hmm... I kinda like it. Reminds me of my (childhood location).</p>

                <p class="d4">We've been walking around for (#) hour(s) and still haven't found a single monster. I'm starting to think this was a fluke.</p>

                <p class="d5">(#) Hours Later</p>

                <p class="d6">Oh $#@%! Is that a (ocean animal)?!</p>

                <p class="d7">No, Looks more like a (ocean animal).</p>

                <p class="d8">I can't believe he lost his (body part)...</p>`;
            
            document.querySelector('#noun').value = '';

            comic.innerHTML = myText;
        }
    })

})();