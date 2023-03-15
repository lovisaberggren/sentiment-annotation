import React from "react";
import { placeholderNames } from "@/utils/placeholders";
import styles from "@/styles/ScoreBoard.module.css";

const ScoreBoard = ({ scores, user_id }) => {
	let scoreBoard = [];
	let i = 1;
	scores.map((score) => {
		if (i < 4 || user_id === score.user_id) {
			score.ord = i;
			score.name = placeholderNames[i - 1];
			scoreBoard.push(score);
		}
		i++;
	});

	return (
		<>
			<div className={styles.scoreboard}>
				<h2>Topplista</h2>
				<ul>
					<>
						{scoreBoard.map((score) => (
							<li
								key={score.user_id}
								className={user_id === score.user_id ? styles.selected : ""}
							>
								<p>
									<span className={styles.number}>#{score.ord}</span>
									{user_id === score.user_id ? "You" : score.name}
								</p>
								<p>{score.nr_label}st</p>
							</li>
						))}
					</>
				</ul>
			</div>
		</>
	);
};

export default ScoreBoard;
