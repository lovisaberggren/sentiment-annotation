import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import Meta from "@/components/Meta";
import TextCard from "@/components/TextCard";
import buttonStyles from "@/styles/Button.module.css";
import styles from "@/styles/Layout.module.css";

function Label({ text, ...props }) {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (!props.session) {
			router.push("/");
		}
		if (props.session?.user) {
			setUser(props.session.user);
		}
	}, [props.session]);

	const refreshData = () => {
		router.replace(router.asPath);
	};

	const setLabel = async (v) => {
		try {
			const { error } = await supabase.from("labels").insert([v]);
			if (error) throw error;
			refreshData();
		} catch (error) {
			alert(error.message);
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
			<TextCard text={text.text} />
			<div className={styles.labeldiv}>
				<button
					className={buttonStyles.button}
					onClick={() => handleClick("pos")}
				>
					Positiv
				</button>
				<button
					className={buttonStyles.button}
					onClick={() => handleClick("neu")}
				>
					Neutral
				</button>
				<button
					className={buttonStyles.button}
					onClick={() => handleClick("neg")}
				>
					Negativ
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
	);
}

export async function getServerSideProps() {
	const { data, error } = await supabase.rpc("get_random_text");

	return {
		props: {
			text: data[0],
			error: error,
		},
	};
}

export default Label;
