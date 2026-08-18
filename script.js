/* =========================
   PASSWORD / LOGIN
========================= */

function checkPassword(){

    const password =
        document.getElementById("passwordInput").value;

    if(password === "1906"){

        const passwordScreen =
            document.getElementById("passwordScreen");

        const websiteContent =
            document.getElementById("websiteContent");

        passwordScreen.style.opacity = "0";

        setTimeout(() => {

            passwordScreen.style.display = "none";

            websiteContent.style.display = "block";

            document.body.style.overflowX = "hidden";

            playMusic();

            startGameEffects();

        },600);

    }else{

        const input =
            document.getElementById("passwordInput");

        input.value = "";

        input.placeholder = "WRONG PIN — TRY AGAIN";

        input.style.borderColor = "#ff2b00";

        input.animate(
            [
                {transform:"translateX(0)"},
                {transform:"translateX(-8px)"},
                {transform:"translateX(8px)"},
                {transform:"translateX(-5px)"},
                {transform:"translateX(5px)"},
                {transform:"translateX(0)"}
            ],
            {
                duration:400
            }
        );

        setTimeout(() => {

            input.placeholder =
                "ENTER SECRET PIN";

            input.style.borderColor =
                "#333";

        },1500);

    }

}


/* =========================
   ENTER KEY PASSWORD
========================= */

document.addEventListener("DOMContentLoaded",()=>{

    const input =
        document.getElementById("passwordInput");

    input.addEventListener("keydown",(event)=>{

        if(event.key === "Enter"){

            checkPassword();

        }

    });

});


/* =========================
   MUSIC
========================= */

function playMusic(){

    const music =
        document.getElementById("music");

    if(!music) return;

    music.volume = 0.45;

    const promise =
        music.play();

    if(promise !== undefined){

        promise.catch(()=>{

            console.log(
                "Music requires user interaction."
            );

        });

    }

}


/* =========================
   OPEN MISSION
========================= */

function openGift(){

    playMusic();

    const giftSection =
        document.getElementById("giftSection");

    if(giftSection){

        giftSection.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    }

    createMissionBurst();

}


/* =========================
   GAME EFFECT STARTER
========================= */

function startGameEffects(){

    createFire();

    createHeart();

    createDiamond();

    setInterval(createFire,250);

    setInterval(createHeart,700);

    setInterval(createDiamond,1200);

}


/* =========================
   FIRE PARTICLES
========================= */

function createFire(){

    const container =
        document.getElementById("particles");

    if(!container) return;

    const fire =
        document.createElement("div");

    fire.innerHTML =
        Math.random() > .5
        ? "🔥"
        : "✦";

    fire.style.position =
        "fixed";

    fire.style.left =
        Math.random()*100+"vw";

    fire.style.bottom =
        "-30px";

    fire.style.fontSize =
        (Math.random()*12+8)+"px";

    fire.style.opacity =
        Math.random()*.7+.3;

    fire.style.pointerEvents =
        "none";

    fire.style.filter =
        "drop-shadow(0 0 8px rgba(255,106,0,.8))";

    fire.style.animation =
        `fireFloat ${Math.random()*4+4}s linear forwards`;

    container.appendChild(fire);

    setTimeout(()=>{

        fire.remove();

    },8000);

}


/* =========================
   HEART PARTICLES
========================= */

function createHeart(){

    const container =
        document.getElementById("hearts");

    if(!container) return;

    const heart =
        document.createElement("div");

    const hearts = [
        "🤍",
        "❤️",
        "🧡"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random()*hearts.length
            )
        ];

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random()*100+"vw";

    heart.style.top =
        "-30px";

    heart.style.fontSize =
        (Math.random()*12+10)+"px";

    heart.style.opacity =
        Math.random()*.6+.3;

    heart.style.pointerEvents =
        "none";

    heart.style.animation =
        `heartFall ${Math.random()*5+6}s linear forwards`;

    container.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}


/* =========================
   DIAMOND PARTICLES
========================= */

function createDiamond(){

    const container =
        document.getElementById("particles");

    if(!container) return;

    const diamond =
        document.createElement("div");

    diamond.innerHTML = "💎";

    diamond.style.position =
        "fixed";

    diamond.style.left =
        Math.random()*100+"vw";

    diamond.style.top =
        Math.random()*100+"vh";

    diamond.style.fontSize =
        (Math.random()*8+8)+"px";

    diamond.style.opacity =
        "0";

    diamond.style.pointerEvents =
        "none";

    diamond.style.animation =
        "diamondGlow 3s ease forwards";

    container.appendChild(diamond);

    setTimeout(()=>{

        diamond.remove();

    },3000);

}


/* =========================
   MISSION BURST
========================= */

function createMissionBurst(){

    const container =
        document.getElementById("particles");

    if(!container) return;

    for(let i=0;i<15;i++){

        const particle =
            document.createElement("div");

        particle.innerHTML =
            Math.random() > .5
            ? "🔥"
            : "✦";

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.fontSize =
            "18px";

        particle.style.pointerEvents =
            "none";

        const angle =
            Math.random()*Math.PI*2;

        const distance =
            Math.random()*180+50;

        const x =
            Math.cos(angle)*distance;

        const y =
            Math.sin(angle)*distance;

        particle.animate(

            [
                {
                    transform:"translate(-50%,-50%) scale(0)",
                    opacity:1
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.5)`,

                    opacity:0
                }
            ],

            {
                duration:1000,
                easing:"ease-out"
            }

        );

        container.appendChild(particle);

        setTimeout(()=>{

            particle.remove();

        },1000);

    }

}


/* =========================
   DYNAMIC ANIMATIONS
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fireFloat{

    0%{

        transform:
            translateY(0)
            scale(.7)
            rotate(0deg);

        opacity:0;

    }

    15%{
        opacity:1;
    }

    100%{

        transform:
            translateY(-110vh)
            translateX(
                ${Math.random()*100-50}px
            )
            scale(1.4)
            rotate(180deg);

        opacity:0;

    }

}


@keyframes heartFall{

    0%{

        transform:
            translateY(0)
            rotate(0deg);

        opacity:0;

    }

    10%{
        opacity:1;
    }

    100%{

        transform:
            translateY(110vh)
            rotate(360deg);

        opacity:0;

    }

}


@keyframes diamondGlow{

    0%{

        opacity:0;

        transform:
            scale(.5)
            rotate(0deg);

    }

    50%{

        opacity:.8;

        transform:
            scale(1.2)
            rotate(180deg);

    }

    100%{

        opacity:0;

        transform:
            scale(.5)
            rotate(360deg);

    }

}


.fade-in{

    opacity:0;

    transform:
        translateY(35px);

    transition:
        opacity .8s ease,
        transform .8s ease;

}


.fade-in.show{

    opacity:1;

    transform:
        translateY(0);

}


.mission-card{

    transition:
        transform .4s ease,
        box-shadow .4s ease;

}


.mission-card:hover{

    transform:
        translateY(-5px);

    box-shadow:
        0 20px 60px
        rgba(255,106,0,.12);

}


#passwordScreen{

    transition:
        opacity .6s ease;

}


`;


document.head.appendChild(style);


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold:.12
        }

    );


document.querySelectorAll(
    ".section," +
    ".mission-card," +
    ".photo-card," +
    ".stat-card," +
    ".letter-box," +
    ".final-section," +
    ".ending"
).forEach(element => {

    element.classList.add("fade-in");

    observer.observe(element);

});


/* =========================
   PHOTO HOVER
========================= */

const photoCards =
    document.querySelectorAll(
        ".photo-card"
    );

photoCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px) scale(1.03)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================
   HERO PARALLAX
========================= */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(".hero");

        if(!hero) return;

        const scroll =
            window.pageYOffset;

        hero.style.transform =
            `translateY(${scroll * .03}px)`;

    }
);


/* =========================
   MISSION TEXT
========================= */

const missionMessages = [

    "MISSION ACCEPTED 🔥",

    "TARGET LOCKED ❤️",

    "LOVE LEVEL: MAXIMUM 💎",

    "TEAM KALA × HAVEN",

    "MISSION: STAY TOGETHER ♾️"

];


let missionIndex = 0;


/* =========================
   FLOATING MISSION MESSAGE
========================= */

const missionMessage =
    document.createElement("div");

missionMessage.className =
    "floating-quote";

missionMessage.innerText =
    missionMessages[0];

document.body.appendChild(
    missionMessage
);


const quoteStyle =
    document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote{

    position:fixed;

    bottom:25px;

    left:50%;

    transform:
        translateX(-50%);

    padding:
        9px 18px;

    background:
        rgba(5,5,5,.85);

    border-left:
        2px solid #ff6a00;

    border-right:
        2px solid #ff6a00;

    color:#ff9d00;

    font-family:'Rajdhani',sans-serif;

    font-size:11px;

    font-weight:600;

    letter-spacing:2px;

    z-index:999;

    opacity:.8;

    transition:
        opacity .5s ease,
        transform .5s ease;

    pointer-events:none;

}

`;


document.head.appendChild(
    quoteStyle
);


/* =========================
   CHANGE MISSION MESSAGE
========================= */

setInterval(()=>{

    missionMessage.style.opacity = "0";

    setTimeout(()=>{

        missionIndex++;

        if(
            missionIndex >=
            missionMessages.length
        ){

            missionIndex = 0;

        }

        missionMessage.innerText =
            missionMessages[missionIndex];

        missionMessage.style.opacity =
            ".8";

    },500);

},5000);


/* =========================
   MUSIC VOLUME
========================= */

document.addEventListener(
    "visibilitychange",
    () => {

        const music =
            document.getElementById("music");

        if(!music) return;

        if(
            document.visibilityState ===
            "hidden"
        ){

            music.volume = .2;

        }else{

            music.volume = .45;

        }

    }
);


/* =========================
   CONSOLE
========================= */

console.log(
    "%c🔥 KALA. × HAVEN. 🔥",
    "color:#ff6a00;font-size:20px;font-weight:bold;"
);

console.log(
    "%cMISSION: 2ND MENSIVE",
    "color:#ff9d00;font-size:14px;"
);

console.log(
    "%cLOVE STATUS: INFINITE ❤️",
    "color:#ffffff;font-size:12px;"
);
