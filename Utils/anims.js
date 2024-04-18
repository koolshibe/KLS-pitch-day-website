import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const stripeScroll = () => {
  const tl = new gsap.timeline({ repeat:-1 })
  .to("#striped", { backgroundPositionY:"28px", duration:10, ease:"none" });
}

export const mouseScroll = () => {
  const tl2 = new gsap.timeline({ scrollTrigger: {
    trigger:"#striped",
    pin:true,
    start: "top top",
    end:"+=1000vw",
    markers: true,
    scrub: 1
  }});
  tl2.from("#striped", {backgroundSize:"100%", duration:1});
  tl2.to("#striped", {backgroundSize:"0%", duration:1}).addLabel("end");
}
