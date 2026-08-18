/* =====================================================
   PASSWORD SYSTEM
===================================================== */

function checkPassword(){

    const password =
        document.getElementById("passwordInput").value;

    if(password === "1906"){

        document.getElementById("passwordScreen")
            .style.opacity = "0";

        setTimeout(() => {

            document.getElementById("passwordScreen")
                .style.display = "none";

            document.getElementById("websiteContent")
                .style.display = "block";

            document.body.style.overflowX = "hidden";

            startGameEffects();

        }, 700);

    }else{

        alert("Wrong Password 🔥");

        const input =
            document.getElementById("passwordInput");

        input.value = "";

        input.focus();

    }

}


/* =====================================================
   ENTER KEY PASSWORD
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const input =
        document.getElementById("passwordInput");

    if(input){

        input.addEventListener("keypress", (event) => {

            if(event.key === "Enter"){

                checkPassword();

            }

        });

    }

});


/* =====================================================
   OPEN GIFT / START MISSION
===================================================== */

function openGift(){

    const music =
        document.getElementById("music");

    if(music){

        music.volume = 0.45;

        music.play().catch(() => {

            console.log(
                "Music requires user interaction."
            );

        });

    }


    const giftSection =
        document.getElementById("giftSection");

    if(giftSection){

        giftSection.scrollIntoView({

            behavior:"smooth"

        });

    }


    createMissionEffect();

}


/* =====================================================
   START GAME EFFECTS
===================================================== */

function startGameEffects(){

    createFloatingElements();

    createParticles();

    startScrollAnimation();

}


/* =====================================================
   FLOATING FREE FIRE ELEMENTS
===================================================== */

function createFloatingElements(){

    const container =
        document.getElementById("hearts");

    if(!container) return;


    const elements = [

        {
            icon:"🔥",
            className:"floating-fire"
        },

        {
            icon:"💎",
            className:"floating-diamond"
        },

        {
            icon:"🎖️",
            className:"floating-rank"
        },

        {
            icon:"🎁",
            className:"floating-loot"
        },

        {
            icon:"🔫",
            className:"floating-weapon"
        },

        {
            icon:"⚡",
            className:"floating-effect"
        }

    ];


    setInterval(() => {

        const data =
            elements[
                Math.floor(
                    Math.random() *
                    elements.length
                )
            ];


        const element =
            document.createElement("div");


        element.className =
            "floating-ff-element " +
            data.className;


        element.innerHTML =
            data.icon;


        element.style.left =
            Math.random() * 90 + "vw";


        element.style.fontSize =
            Math.random() * 20 + 20 + "px";


        element.style.animationDuration =
            Math.random() * 5 + 6 + "s";


        container.appendChild(element);


        setTimeout(() => {

            element.remove();

        },9000);


    },900);

}


/* =====================================================
   FLOATING ELEMENT CSS
===================================================== */

const floatingStyle =
document.createElement("style");

floatingStyle.innerHTML = `

.floating-ff-element{

    position:absolute;

    top:-50px;

    pointer-events:none;

    opacity:0;

    animation:
        floatingFF 8s
        linear forwards;

    filter:
        drop-shadow(
            0 0 10px
            rgba(255,106,0,.5)
        );

}

.floating-fire{

    filter:
        drop-shadow(
            0 0 15px
            rgba(255,80,0,.8)
        );

}

.floating-diamond{

    filter:
        drop-shadow(
            0 0 15px
            rgba(0,180,255,.8)
        );

}

.floating-rank{

    filter:
        drop-shadow(
            0 0 15px
            rgba(255,196,0,.7)
        );

}

.floating-loot{

    filter:
        drop-shadow(
            0 0 15px
            rgba(255,106,0,.6)
        );

}

.floating-weapon{

    transform:rotate(-20deg);

}

.floating-effect{

    filter:
        drop-shadow(
            0 0 18px
            rgba(255,200,0,.8)
        );

}

@keyframes floatingFF{

    0%{

        transform:
            translateY(0)
            rotate(0deg)
            scale(.7);

        opacity:0;

    }

    10%{

        opacity:.8;

    }

    50%{

        transform:
            translateY(50vh)
            rotate(180deg)
            scale(1);

        opacity:.6;

    }

    100%{

        transform:
            translateY(115vh)
            rotate(360deg)
            scale(.6);

        opacity:0;

    }

}

`;

document.head.appendChild(floatingStyle);


/* =====================================================
   PARTICLES
===================================================== */

function createParticles(){

    let particleContainer =
        document.getElementById("particles");


    if(!particleContainer){

        particleContainer =
            document.createElement("div");

        particleContainer.id =
            "particles";

        document.body.appendChild(
            particleContainer
        );

    }


    setInterval(() => {

        const particle =
            document.createElement("span");


        particle.innerHTML =
            Math.random() > .5
                ? "✦"
                : "•";


        particle.style.position =
            "absolute";


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.top =
            Math.random() * 100 + "vh";


        particle.style.color =
            Math.random() > .5
                ? "#ff6a00"
                : "#ffc400";


        particle.style.opacity =
            Math.random() * .5 + .2;


        particle.style.fontSize =
            Math.random() * 8 + 5 + "px";


        particle.style.animation =
            "particleFade 3s ease forwards";


        particleContainer.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        },3000);


    },250);

}


const particleStyle =
document.createElement("style");

particleStyle.innerHTML = `

@keyframes particleFade{

    0%{

        transform:
            scale(.3)
            translateY(0);

        opacity:0;

    }

    30%{

        opacity:1;

    }

    100%{

        transform:
            scale(1.4)
            translateY(-40px);

        opacity:0;

    }

}

`;

document.head.appendChild(particleStyle);


/* =====================================================
   MISSION COMPLETE EFFECT
===================================================== */

function createMissionEffect(){

    const burst =
        document.createElement("div");


    burst.className =
        "mission-complete";


    burst.innerHTML = `

        <div class="mission-complete-icon">
            🎖️
        </div>

        <div class="mission-complete-text">
            MISSION STARTED
        </div>

    `;


    document.body.appendChild(
        burst
    );


    setTimeout(() => {

        burst.classList.add("show");

    },50);


    setTimeout(() => {

        burst.classList.remove("show");

    },1800);


    setTimeout(() => {

        burst.remove();

    },2500);

}


const missionStyle =
document.createElement("style");

missionStyle.innerHTML = `

.mission-complete{

    position:fixed;

    left:50%;

    top:50%;

    transform:
        translate(-50%,-50%)
        scale(.5);

    z-index:9999;

    text-align:center;

    opacity:0;

    pointer-events:none;

    transition:.5s;

}

.mission-complete.show{

    opacity:1;

    transform:
        translate(-50%,-50%)
        scale(1);

}

.mission-complete-icon{

    font-size:80px;

    filter:
        drop-shadow(
            0 0 25px
            rgba(255,150,0,.8)
        );

}

.mission-complete-text{

    margin-top:15px;

    padding:10px 25px;

    background:
        linear-gradient(
            90deg,
            #ff2b00,
            #ff8c00
        );

    font-family:'Rajdhani',sans-serif;

    font-size:20px;

    font-weight:700;

    letter-spacing:4px;

}

`;

document.head.appendChild(
    missionStyle
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

function startScrollAnimation(){

    const elements =
        document.querySelectorAll(

            ".section," +
            ".mission-card," +
            ".photo-card," +
            ".stat-card," +
            ".letter-box," +
            ".final-section," +
            ".ending"

        );


    elements.forEach(element => {

        element.classList.add(
            "fade-in"
        );

    });


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if(
                        entry.isIntersecting
                    ){

                        entry.target
                            .classList
                            .add("show");

                    }

                });

            },

            {
                threshold:.12
            }

        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =====================================================
   PHOTO HOVER
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const photos =
            document.querySelectorAll(
                ".photo-card"
            );


        photos.forEach(photo => {

            photo.addEventListener(
                "mouseenter",
                () => {

                    photo.style.transform =
                        "translateY(-10px) scale(1.03)";

                }
            );


            photo.addEventListener(
                "mouseleave",
                () => {

                    photo.style.transform =
                        "";

                }
            );

        });

    }
);


/* =====================================================
   HERO PARALLAX
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(".hero");


        if(!hero) return;


        const scroll =
            window.pageYOffset;


        const character =
            document.querySelector(
                ".hero-character"
            );


        const parachute =
            document.querySelector(
                ".hero-parachute"
            );


        const fire =
            document.querySelector(
                ".hero-fire"
            );


        if(character){

            character.style.transform =
                `translateY(${scroll * .12}px)`;

        }


        if(parachute){

            parachute.style.transform =
                `translateY(${scroll * .06}px)`;

        }


        if(fire){

            fire.style.transform =
                `translateY(${scroll * .2}px)`;

        }

    }
);


/* =====================================================
   MUSIC VOLUME CONTROL
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const music =
            document.getElementById("music");


        if(music){

            music.volume = .45;

        }

    }
);


/* =====================================================
   DOUBLE CLICK PHOTO
===================================================== */

document.addEventListener(
    "dblclick",
    event => {

        const photo =
            event.target.closest(
                ".photo-card"
            );


        if(!photo) return;


        createHeartBurst(
            event.clientX,
            event.clientY
        );

    }
);


/* =====================================================
   HEART / LOVE BURST
===================================================== */

function createHeartBurst(x,y){

    const hearts = [
        "🤍",
        "🧡",
        "🔥",
        "✨"
    ];


    for(let i = 0; i < 10; i++){

        const heart =
            document.createElement("div");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            x + "px";


        heart.style.top =
            y + "px";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        heart.style.fontSize =
            Math.random() * 15 + 15 + "px";


        const angle =
            Math.random() *
            Math.PI * 2;


        const distance =
            Math.random() * 100 + 40;


        const targetX =
            Math.cos(angle) *
            distance;


        const targetY =
            Math.sin(angle) *
            distance;


        heart.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(.5)",

                    opacity:1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${targetX}px),
                            calc(-50% + ${targetY}px)
                        )
                        scale(1.3)`,

                    opacity:0

                }

            ],

            {

                duration:
                    Math.random() * 700 + 700,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        },1500);

    }

}


/* =====================================================
   SECRET MESSAGE
===================================================== */

let secretClicks = 0;


document.addEventListener(
    "click",
    event => {

        if(
            event.target.classList.contains(
                "victory-icon"
            )
        ){

            secretClicks++;


            if(secretClicks >= 5){

                secretClicks = 0;


                alert(
                    "💌 I love you more than three words ever could 🤍"
                );

            }

        }

    }
);


/* =====================================================
   RANDOM GAME QUOTES
===================================================== */

const quotes = [

    "Mission: Keep loving you forever 🤍",

    "Booyah! We survived another month together 🔥",

    "2nd Mensive — Mission Complete 🎖️",

    "You are my favorite teammate 🤍",

    "No matter the map, I choose you.",

    "My favorite loot will always be you 🎁",

    "You + Me = Unlimited Booyah 🧡",

    "I would choose you in every match.",

    "Our next mission: Forever together 🤍"

];


let currentQuote = 0;


const quoteElement =
    document.createElement("div");


quoteElement.className =
    "floating-quote";


quoteElement.innerText =
    quotes[0];


document.body.appendChild(
    quoteElement
);


setInterval(() => {

    currentQuote++;


    if(
        currentQuote >= quotes.length
    ){

        currentQuote = 0;

    }


    quoteElement.style.opacity =
        "0";


    setTimeout(() => {

        quoteElement.innerText =
            quotes[currentQuote];

        quoteElement.style.opacity =
            "1";

    },500);


},5000);


/* =====================================================
   QUOTE STYLE
===================================================== */

const quoteStyle =
document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote{

    position:fixed;

    bottom:20px;

    left:50%;

    transform:
        translateX(-50%);

    z-index:998;

    padding:
        10px 18px;

    background:
        rgba(5,5,5,.85);

    border-left:
        2px solid
        #ff6a00;

    border-right:
        2px solid
        #ff6a00;

    color:#ddd;

    font-family:'Rajdhani',sans-serif;

    font-size:12px;

    letter-spacing:1px;

    white-space:nowrap;

    backdrop-filter:
        blur(10px);

    transition:.5s;

}


@media(max-width:600px){

    .floating-quote{

        max-width:90%;

        overflow:hidden;

        text-overflow:ellipsis;

        font-size:10px;

    }

}

`;

document.head.appendChild(
    quoteStyle
);


/* =====================================================
   PREVENT MUSIC ERROR
===================================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        const music =
            document.getElementById("music");


        if(!music) return;


        if(
            document.hidden &&
            !music.paused
        ){

            music.pause();

        }

    }
);
