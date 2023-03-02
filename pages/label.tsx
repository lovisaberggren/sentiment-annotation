import React from "react";
import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { supabase } from "./../lib/supabaseClient";
import TextCard from "../components/TextCard";
import buttonStyles from "@/styles/Button.module.css";

function Label({ text, error }) {
	const router = useRouter();

	const setLabel = async (v) => {
		try {
			const { error } = await supabase.from("labels").insert([v]);

			if (error) throw error;
			alert("Label created successfully");
			router.push("/");
		} catch (error) {
			alert(error.message);
		}
	};

	const handleClick = (user_id, label) => {
		const values = {
			user_id,
			text_id: text.id,
			label,
		};
		setLabel(values);
	};

	return (
		<>
			<Meta title="Klassificera" />
			<TextCard text={text.text} />
			<div>
				<button
					className={buttonStyles.button}
					onClick={() =>
						handleClick("647ae96f-5c25-4918-8a21-52ebf7c08dbf", "pos")
					}
				>
					Positiv
				</button>
				<button
					className={buttonStyles.button}
					onClick={() =>
						handleClick("647ae96f-5c25-4918-8a21-52ebf7c08dbf", "neu")
					}
				>
					Neutral
				</button>
				<button
					className={buttonStyles.button}
					onClick={() =>
						handleClick("647ae96f-5c25-4918-8a21-52ebf7c08dbf", "neg")
					}
				>
					Negativ
				</button>
			</div>
			<div>
				<button className={buttonStyles.button}>Hoppa över</button>
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
