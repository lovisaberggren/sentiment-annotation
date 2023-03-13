import React from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
	return (
		<>
			<h2>Kontakt</h2>
			<p>Har du några funderingar? Skicka iväg ett ett mejl till mig!</p>
			<p>
				✉️
				<a className={styles.mailto} href="mailto:berggren.lovisa@gmail.com">
					berggren.lovisa@gmail.com
				</a>
			</p>
		</>
	);
};

export default Contact;
