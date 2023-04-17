import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import styles from "@/styles/ClosingInfo.module.css";

const ClosingInfo = () => {
	return (
		<div className={styles.infodiv}>
			<AiFillInfoCircle className={styles.icon} />
			<p>
				På måndag 24 april kommer applikationen stänga för fler
				klassificeringar.
			</p>
			<p className={styles.text2}>
				Se till att klassificera så många texter du kan innan dess!
			</p>
		</div>
	);
};

export default ClosingInfo;
