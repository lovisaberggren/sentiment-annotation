import React from "react";
import styles from "@/styles/Done.module.css";

const Done = () => {
	return (
		<>
			<h2 className={styles.div}>Det var allt!</h2>
			<p className={styles.div}>
				Tyvärr finns inga fler texter du kan klassificera just nu, kom tillbaka
				senare och kika om det finns nya texter!
			</p>
			<p className={styles.div}>Tack för hjälpen! 💖</p>
		</>
	);
};

export default Done;
