import React from "react";
import { clsx } from "clsx";
import { AiFillInfoCircle } from "react-icons/ai";
import styles from "@/styles/ClosingInfo.module.css";

const Template = ({ text1, text2, color }) => {
	return (
		<div
			className={clsx(styles.infodiv, {
				[styles.red]: color === "red",
				[styles.yellow]: color === "yellow",
			})}
		>
			<AiFillInfoCircle className={styles.icon} />
			<p>{text1}</p>
			<p className={styles.text2}>{text2}</p>
		</div>
	);
};

export default Template;
