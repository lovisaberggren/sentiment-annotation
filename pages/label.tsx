import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { supabase } from "@/lib/supabaseClient";
import Meta from "@/components/Meta";
import TextCard from "@/components/TextCard";
import Done from "@/components/Done";
import buttonStyles from "@/styles/Button.module.css";
import styles from "@/styles/Layout.module.css";

function Label({ session }) {
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [text, setText] = useState({ text: null, id: null });
	const [done, setDone] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (!session) {
			router.push("/");
		}
		if (session?.user) {
			setUser(session.user);
		}
	}, [session]);

	useEffect(() => {
		if (user) {
			getText();
		}
	}, [user]);

	async function getText() {
		try {
			const { data, error } = await supabase.rpc("get_random_text_param", {
				uid: user.id,
			});

			if (error || !data) {
				throw error || new Error("No data");
			}
			setIsError(false);
			if (data.length == 0) {
				setDone(true);
			} else {
				setText(data[0]);
			}
		} catch (error) {
			setIsError(true);
			console.log("error", error.message);
		}
	}

	const setLabel = async (v) => {
		try {
			const { error } = await supabase.from("labels").insert([v]);
			if (error) throw error;
			getText();
		} catch (error) {
			setIsError(true);
			console.log("error", error.message);
		}
	};

	const handleClick = (label) => {
		const values = {
			user_id: user.id,
			text_id: text.id,
			label,
		};
		setLabel(values);
	};

	return (
		<>
			<Meta title="Klassificera | Attitydanalys" />
			{isError ? (
				<p className={styles.errormessage}>
					<AiOutlineExclamationCircle />
					Något gick fel, prova igen senare!
				</p>
			) : (
				<>
					{done ? (
						<Done />
					) : (
						<>
							<TextCard text={text.text} />
							<div className={styles.labeldiv}>
								<button
									className={buttonStyles.button}
									onClick={() => handleClick("neg")}
								>
									Negativ
								</button>
								<button
									className={buttonStyles.button}
									onClick={() => handleClick("neu")}
								>
									Neutral
								</button>
								<button
									className={buttonStyles.button}
									onClick={() => handleClick("pos")}
								>
									Positiv
								</button>
							</div>
							<div className={styles.labeldiv}>
								<button
									className={buttonStyles.button2}
									onClick={() => handleClick(null)}
								>
									Hoppa över
								</button>
							</div>
						</>
					)}
				</>
			)}
		</>
	);
}

export default Label;
