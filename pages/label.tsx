import React from "react";
import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { supabase } from "./../lib/supabaseClient";
import TextCard from "../components/TextCard";
import buttonStyles from "@/styles/Button.module.css";

function Label({ text, ...props }) {
	const router = useRouter();

	if (!props.session) {
		router.push("/");
	}

	const user = props.session.user;

	console.log(user);

	const refreshData = () => {
		router.replace(router.asPath);
	};

	const setLabel = async (v) => {
		try {
			const { error } = await supabase.from("labels").insert([v]);

			if (error) throw error;
			alert("Label created successfully");
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
			<Meta title="Klassificera" />
			<TextCard text={text.text} />
			<div>
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
