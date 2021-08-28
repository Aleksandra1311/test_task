$(() => {
    $('span').hover(function() {
        $('body').toggleClass('stop-scrolling');
    });
})

// 2й вариант ниже:

// $(() => {
//     const STOP_SCROLLING = 'stop-scrolling';
    
//     const $span = $('span');
//     const $body = $('body');

//     $($span).hover(function() {
//         $($body).toggleClass(STOP_SCROLLING);
//     });
// })
