import gsap from "gsap";

export const stripeScroll = () => {
  const tl = new gsap.timeline({ repeat:-1 })
  .to("#striped", { backgroundPosition:"0 28px", duration:1, ease:"none" });
}
