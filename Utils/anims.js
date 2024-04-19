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
  const tl = new gsap.timeline({ scrollTrigger:{
    ease:"none",
    trigger:"#at",
    pin:true,
    start:0,
    end:"+=500vh",
    scrub: 1
  }});
  tl.from("#at", {strokeDashoffset:"1000px",x:"0vw", duration:0});
  tl.to("#at", {strokeDashoffset:"2000px",x:window.innerWidth-300, duration:1});
}
