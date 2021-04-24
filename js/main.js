gsap.fromTo(".header", {x: 200}, {duration: 1, x: 0});
gsap.fromTo(".paragraph", {x: -200}, {duration: 1, x: 0});


//loader
gsap.set('.loader', {
    scaleX: 0,
    rotation: 10,
    xPercent: -5,
    yPercent: -50,
    transformOrigin: 'left center',
    autoAlpha: 1
});

//barba
barba.init({
    transitions: [{
        async leave() {
            await loaderIn();
        },
        enter() {
            loaderAway();
        }
    }]
});

function loaderIn() {
    // GSAP tween to stretch the loading screen across the whole screen
    return gsap.fromTo('.loader',
        {
            rotation: 10,
            scaleX: 0,
            xPercent: -5
        },
        {
            duration: 0.8,
            xPercent: 0,
            scaleX: 1,
            rotation: 0,
            ease: 'power4.inOut',
            transformOrigin: 'left center'
        });
}

function loaderAway() {
    // GSAP tween to hide loading screen
    return gsap.to('.loader', {
        duration: 0.8,
        scaleX: 0,
        xPercent: 5,
        rotation: -10,
        transformOrigin: 'right center',
        ease: 'power4.inOut'
    });
}

// do something before the transition starts
barba.hooks.before(() => {
    document.querySelector('html').classList.add('is-transitioning');
});
// do something after the transition finishes
barba.hooks.after(() => {
    document.querySelector('html').classList.remove('is-transitioning');
});

// scroll to the top of the page
barba.hooks.enter(() => {
    window.scrollTo(0, 0);
});


function lettingItSee(){

    let navi = document.getElementById('navi');
    let active = navi.classList.contains("active");
    if (active) { 
        navi.classList.remove("active");
        navi.style.transform = "translateX(-900px)";
    } else { 
        navi.classList.add("active");
        navi.style.transform = "translateX(0)";
    }

}