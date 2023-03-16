import React from "react";
import styles from "@/styles/Layout.module.css";

const Reminders = () => {
	return (
		<>
			<h2>Kom ihåg!</h2>
			<ul className={styles.remiderlist}>
				<li>
					Du kan klassificera hur många eller få texter du vill, och det går
					alltid bra att komma tillbaka och fortsätta senare.
				</li>
				<li>Fokusera på vilken känsla skribenten har.</li>
				<li>Välj &quot;neutral&quot; för texter du tycker är neutrala.</li>
				<li>Hoppa över om du är osäker eller om texten inte är lämplig.</li>
			</ul>
		</>
	);
};

export default Reminders;
