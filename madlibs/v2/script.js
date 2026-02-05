(function(){

    'use strict';
    console.log('reading js');

    const allSection = document.querySelectorAll('section');

    document.querySelector('#begin').addEventListender('click', function() {
        allSection[0].className = "hidden";
        allSection[1].className = "showing choose-2";
    });

    document.querySelector('#pgnext').addEventListender('click', function() {
        allSection[1].className = "hidden";
        allSection[2].className = "showing type-3";
    });

    document.querySelector('#finalpg').addEventListender('click', function() {
        allSection[2].className = "hidden";
        allSection[3].className = "showing type-4";
    });

    document.querySelector('#return').addEventListender('click', function() {
        allSection[3].className = "hidden";
        allSection[0].className = "showing story-5";
    });

})();