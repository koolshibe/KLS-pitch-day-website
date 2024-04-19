import styles from "/styles/atsymbol.module.css";
import { useEffect } from "react";

export const Svg = () => {
	return (
		<svg width={300} height={300}
     xmlns="http://www.w3.org/2000/svg" className={ styles.svg } id={"at"}>
			<path d="m 100 150 a 0.5 0.5 0 0 1 0 -100 l 20 0 l 0 -10 l 0 90 a 1 1 0 0 0 70 0 l 0 -30 a 1 1 0 0 0 -180 0 a 100 100 0 0 0 90 90" stroke="black" stroke-width="20px" fill="none" stroke-linecap="round"></path>
		</svg>
	)
}
