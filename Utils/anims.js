import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const stripeScroll = () => {
  const tl = new gsap.timeline({ repeat:-1 })
  .to("#striped", { backgroundPositionY:"28px", duration:1, ease:"none" });
}

export const mouseScroll = () => {
  const tl2 = new gsap.timeline({ scrollTrigger: {
    ease:"none",
    trigger:"#striped",
    pin:true,
    start:"top top",
    end:"+=10000px",
    scrub: 1
  }});
  tl2.from("#striped", {backgroundSize:"0%", duration:0}).to("#striped", {backgroundSize:"100%", duration:1});
}
