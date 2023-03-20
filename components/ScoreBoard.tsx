import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { placeholderNames } from "@/utils/placeholders";
import styles from "@/styles/ScoreBoard.module.css";

const ScoreBoard = ({ scores, user_id }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [scoreBoard, setScoreBoard] = useState([]);

	useEffect(() => {
		const seedRandom = require("seedrandom");
		let tempScoreBoard = [];
		let i = 1;
		scores.map((score) => {
			if (i < 4 || user_id === score.user_id) {
				score.ord = i;
				const randomNumber = seedRandom(score.user_id);
				if (user_id === score.user_id) {
					score.name = "You";
				} else {
					score.name =
						placeholderNames[
							Math.floor(randomNumber() * placeholderNames.length)
						];
				}
				tempScoreBoard.push(score);
			}
			i++;
		});
		setScoreBoard(tempScoreBoard);
		setIsLoading(false);
	}, [scores, user_id]);

	return (
		<>
			<div className={styles.scoreboard}>
				<h2>Topplista</h2>
				{isLoading ? (
					<div className={styles.loader}>
						<Oval
							height="30"
							width="30"
							color="black"
							secondaryColor="gray"
							ariaLabel="loading"
						/>
					</div>
				) : (
					<ul>
						{scoreBoard.map((score) => (
							<li
								key={score.user_id}
								className={user_id === score.user_id ? styles.selected : ""}
							>
								<p>
									<span className={styles.number}>#{score.ord}</span>
									{score.name}
								</p>
								<p>{score.nr_label}st</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default ScoreBoard;
