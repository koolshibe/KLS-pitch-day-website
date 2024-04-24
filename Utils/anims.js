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
    start:"top top",
    end:"+=500vh",
    scrub: 1
  }});
  tl.from("#striped", {backgroundSize:"0%", duration:0}).to("#striped", {backgroundSize:"100%", duration:1});
}

export const atScroll = () => {
  const body = document.querySelector("body");
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
      gsap.fromTo("#register",{y:0, opacity:0},{y:"65vh", opacity:1, delay:2.5});
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
