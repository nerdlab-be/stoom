// Initialise scrollmagic (https://github.com/janpaepke/ScrollMagic)
var controller = new ScrollMagic.Controller();

// ---
// Fixed header
// ---

$heroHeight = $('.js-hero').height();

// Make header fixed
if ($('.js-header')[0] != undefined) {
    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".js-header",
        triggerHook: 0
    })
    .setPin(".js-header")
    // .addIndicators()
    .addTo(controller);
}

// Add header fixed animation
if ($('.js-header')[0] != undefined) {
    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".js-header",
        offset: $heroHeight,
        triggerHook: 0
    })
    .setClassToggle(".js-header", "is-sticky")
    // .addIndicators()
    .addTo(controller);
}

$scrollHeight = $heroHeight/5;

// Letters animation
if ($('.js-graphic')[0] != undefined) {
    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".js-graphic",
        // duration: $scrollHeight * 1.8,
        triggerHook: 0
    })
    .setTween(".js-graphic__one", 30, {
        y: -$scrollHeight * 1.2,
        ease: Power0.easeInOut,
        yoyo: true,
        repeat: -1
    })
    // .addIndicators()
    .addTo(controller);

    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".js-graphic",
        // duration: $scrollHeight * 2,
        triggerHook: 0
    })
    .setTween(".js-graphic__two", 30, {
        y: $scrollHeight * 2,
        ease: Power0.easeInOut,
        yoyo: true,
        repeat: -1
    })
    // .addIndicators()
    .addTo(controller);

    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".js-graphic",
        // duration: $scrollHeight * 2,
        triggerHook: 0
    })
    .setTween(".js-graphic__three", 20, {
        y: $scrollHeight * 2,
        ease: Power0.easeInOut,
        yoyo: true,
        repeat: -1
    })
    // .addIndicators()
    .addTo(controller);

    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".js-graphic",
        // duration: $scrollHeight * 2,
        triggerHook: 0,
        yoyo: true,
        repeat: -1
    })
    .setTween(".js-graphic__four", 30, {
        y: -$scrollHeight * 1.5,
        ease: Power0.easeInOut,
        yoyo: true,
        repeat: -1
    })
    // .addIndicators()
    .addTo(controller);

    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".js-graphic",
        // duration: $scrollHeight * 2,
        triggerHook: 0
    })
    .setTween(".js-graphic__five", 12, {
        y: -$scrollHeight ,
        ease: Power0.easeInOut,
        yoyo: true,
        repeat: -1
    })
    // .addIndicators()
    .addTo(controller);
}
