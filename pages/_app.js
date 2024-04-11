import '/styles/global.css';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
