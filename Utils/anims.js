import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const stripeScroll = () => {
  const tl = new gsap.timeline({ repeat:-1 })
  .to("#striped", { backgroundPositionY:"28px", duration:1, ease:"none" });
}

export const mouseScroll = () => {
  const tl = new gsap.timeline({ scrollTrigger: {
    ease:"none",
    trigger:"#striped",
    pin:true,
    start:0,
    end:"+=500vh",
    scrub: 1
  }});
  tl.from("#striped", {backgroundSize:"0%", duration:0}).to("#striped", {backgroundSize:"100%", duration:1});
}

export const atScroll = () => {
  const body = document.querySelector("body");
  const svg = document.querySelector("#at");
  const tl = new gsap.timeline({ scrollTrigger:{
    ease:"none",
    trigger:"#at",
    pin:true,
    start:0,
    end:"+=500vh",
    scrub:1,
    onLeave: ({}) => {
      body.style.overflow="hidden";
      gsap.to("#at", {x:0, rotation:360, duration:2.5, ease:"bounce.out", onComplete() {
        body.style.overflow="auto";
      }});
      gsap.fromTo("#register",{y:0, opacity:0},{y:window.pageYOffset, opacity:1, delay:2.5});
    },
    onEnterBack: ({}) => {
      body.style.overflow="hidden";
      gsap.fromTo("#at", {x:0},{x:body.clientWidth-300, duration:1, onComplete() {
        body.style.overflow="auto";
      }});
      gsap.to("#register",{y:0, opacity:0});
    }
  }});
  tl.from("#at", {strokeDashoffset:"1000px",x:0, duration:0});
  tl.to("#at", {strokeDashoffset:"2000px",x:body.clientWidth-300, duration:1});
}

export const refresh = () => {
  onresize = (event) => {
    ScrollTrigger.refresh();
  };
}

export const scrollTeller = () => {
  const tl = new gsap.timeline({ repeat:-1 });
  const teller = document.querySelector("#teller");
  tl.fromTo("#teller", {opacity:0.2},{opacity:1});
  tl.yoyo(true);
  teller.onclick = function(){
    var distanceToScroll = window.innerHeight;
    var speed = 5;

    var scrollInterval = setInterval(function() {
        window.scrollBy(0, speed);

        if (window.pageYOffset >= distanceToScroll) {
            clearInterval(scrollInterval);
        }
    }, 16);
    onwheel = function() {clearInterval(scrollInterval)};
  };
}

export const navScroll = () => {
  const tl = new gsap.timeline({
    scrollTrigger: {
      ease:"none",
      trigger:"#nav",
      start:"500vh top"
    }
  });
  tl.fromTo("#nav", {opacity:0, duration:0}, {opacity:1, duration:1, delay:3.5});
}
export const toRegister = () => {
  const tl = new gsap.timeline({ scrollTrigger: {
    ease:"power2.in",
    trigger:"#nav",
    start:"550vh top",
    markers:true
  }});
  const displayText = document.querySelector("#striped");
  var chars = "INNOVATE";
  displayText.innerHTML = chars.split("").map(function(el, i) {
    return `<span class="Letter" style="display:inline-block">${el}</span>`;
  }).join('');
  chars = "REGISTER";
  displayText.innerHTML += chars.split("").map(function(el, i) {
    return `<span class="LetterTwo" style="display:inline-block">${el}</span>`;
  }).join('');
  tl.add("start").to(".Letter", {y:"-100%", duration:1, stagger:0.1}, "start").to(".LetterTwo", {y:"-100%", duration:1, stagger:0.1}, "start");
}
