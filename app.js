AOS.init();
gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".panel3",
//     pin: true,
//     scrub: 1,
//     end: "+=4000",
//   }
// });

//FULLSCREEN
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


const tl4 = gsap.timeline();
tl4.to(".t6", 3, {y:20,opacity:50})
.to(".sembunyi", 10, {x:-window.innerWidth}) 
.to(".t6", 2, {y:-20,opacity:0})
.to(".sembunyi", 15, {x:-window.innerWidth})
.to(".sembunyi", 15, {x:-window.innerWidth})

.to(".t7", 3, {y:20,opacity:50})
.to(".sembunyi", 10, {x:-window.innerWidth}) 
.to(".t7", 2, {y:-20,opacity:0})
.to(".sembunyi", 15, {x:-window.innerWidth})
.to(".sembunyi", 15, {x:-window.innerWidth})

.to(".t8", 3, {y:20,opacity:50})
.to(".sembunyi", 10, {x:-window.innerWidth}) 
.to(".t8", 2, {y:-20,opacity:0})
.to(".sembunyi", 15, {x:-window.innerWidth})

ScrollTrigger.create({
    trigger:".panel3",
    start: "center center",
    end: "+=4000",
    // pin:true,
    scrub:1,
    animation: tl4,
    markers: true,
    // animation: animasi2
})

// CAR
const mobil = gsap.timeline();
const ban = gsap.timeline();
mobil.to(".car1", 5, {opacity:100})
ban.to(".ban", 5, {opacity:100, rotate:"+=1060"})

ScrollTrigger.create({
  trigger:".panel3",
  start: "center center",
  // endTrigger:"#akhirPanel",
  end: "+=7000",
  // pin:true,
  // pinSpacing:false,
  scrub:1,
  animation:ban,
  markers: true,
})
ScrollTrigger.create({
  trigger:".panel3",
  start: "center center",
  // endTrigger:"#akhirPanel",
  end: "+=7000",
  // pin:true,
  // pinSpacing:false,
  scrub:1,
  animation: mobil,
  markers: true,
})

const mobil2 = gsap.to(".bg1", 5, {x:-window.innerWidth*2.7})

ScrollTrigger.create({
  trigger:".panel3",
  start: "center center",
  // endTrigger:"#akhirPanel",
  end: "+=8000",
  pin:true,
  // pinSpacing:false,
  scrub:1,
  animation: mobil2,
  markers: true,
})



// const t1 = gsap.timeline();
// t1.to(".t1", 5, {x:-100, opacity:0})
// .to(".sembunyi", 5, {x:-window.innerWidth})
// .to(".t2", 5, {opacity:100, y:50})
// .to(".sembunyi", 5, {x:-window.innerWidth})

// const t1 = gsap.timeline();
// const t2 = gsap.timeline();
// t1.to(".t1", 5, {x:-100, opacity:0})
// t2.to(".t2", 5, {opacity:100, y:50})

// ScrollTrigger.create({
//   trigger:".panel21",
//   start: "center center",
//   end: "+=4000",
//   pin:true,
//   scrub:1,
//   animation: t1,
//   animation: t2,
//   markers: true,
// })

const t1 = gsap.to(".t1", 5, {x:-100, opacity:0})

ScrollTrigger.create({
  trigger:".panel21",
  start: "center center",
  // end: "+=7000",
  // pin:true,
  scrub:1,
  animation: t1,
  markers: true,
})

// const t2 = gsap.to(".t2", 5, {opacity:100, y:50})
const t2 = gsap.timeline();
t2.to(".sembunyi", 5, {x:-window.innerWidth}) 
.to(".t2", 5, {opacity:100, y:50})
.to(".t2", 5, {opacity:0, y:-50})
.to(".t2", 5, {opacity:0, y:-50})
.to(".sembunyi", 5, {x:-window.innerWidth})
.to(".t3", 5, {opacity:100, y:50})
.to(".t3", 5, {opacity:0, y:-50})
.to(".t3", 5, {opacity:0, y:-50})
.to(".sembunyi", 5, {x:-window.innerWidth}) 


ScrollTrigger.create({
  trigger:".panel21",
  start: "center center",
  end: "+=2000",
  pin:true,
  pinSpacing:false,
  scrub:1,
  animation: t2,
  markers: true,
})



const tl1 = gsap.timeline();
tl1.to(".sembunyi", 2, {x:-window.innerWidth}) 
.to(".card1", 5, {y:20,opacity:50})
.to(".sembunyi", 10, {x:-window.innerWidth}) 
.to(".card1", 5, {y:-20,opacity:0})
.to(".sembunyi", 15, {x:-window.innerWidth}) 
.to(".card2", 5, {y:20,opacity:50})
.to(".sembunyi", 10, {x:-window.innerWidth}) 
.to(".card2", 5, {y:-20,opacity:0})
.to(".sembunyi", 15, {x:-window.innerWidth}) 

ScrollTrigger.create({
    trigger:".panel4",
    start: "center center",
    end: "+=4000",
    pin:true,
    scrub:1,
    animation: tl1,
    markers: true,
    // animation: animasi2
})

const tl3 = gsap.timeline();
tl3.to(".sembunyi", 2, {x:-window.innerWidth}) 
.to(".t4", 5, {y:20,opacity:50})
.to(".sembunyi", 10, {x:-window.innerWidth}) 
.to(".t4", 5, {y:-20,opacity:0})
.to(".sembunyi", 15, {x:-window.innerWidth}) 
.to(".t5", 5, {y:20,opacity:50})
.to(".sembunyi", 10, {x:-window.innerWidth}) 
.to(".t5", 5, {y:-20,opacity:0})
.to(".sembunyi", 15, {x:-window.innerWidth}) 

ScrollTrigger.create({
    trigger:".perjalanan_panel10",
    start: "center center",
    end: "+=4000",
    pin:true,
    scrub:1,
    animation: tl3,
    markers: true,
    // animation: animasi2
})









function myFunction() {
    document.getElementById("panel1").style.visibility = "collapse";
  }

  


// LOADER BEFORE READY


//HORIZONTAL
// BATAS INDEKS1

let playBtn = document.getElementsByClassName("play");
let pauseBtn = document.getElementsByClassName("pause");

let text = document.querySelector("p");

const audio = new Audio("audio/bg.mp3");

playBtn[0].addEventListener("click", (e) => {
  audio.play();
  // text.innerHTML = "Audio Playing🔊";
});

pauseBtn[0].addEventListener("click", (e) => {
  audio.pause();
  // text.innerHTML = "Audio Paused";
});

// MODAL HORIZONTAL SCROLL

// AKHIR MODAL HORIZONTAL SCROLL

// KUIS
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
// AKHIR KUIS


















// SLIDER GALLERY
var slideIndex = 1;
showDivs1(slideIndex);

function plusDivs1(n) {
  showDivs1(slideIndex += n);
}

function currentDiv1(n) {
  showDivs1(slideIndex = n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}