import { supabase } from "./../lib/supabaseClient";
import TextCard from "../components/TextCard";
import buttonStyles from "@/styles/Button.module.css";

function Page({ text, error }) {
	return (
		<>
			<TextCard id={text.id} text={text.text} />
			<div>
				<button className={buttonStyles.button}>Positiv</button>
				<button className={buttonStyles.button}>Neutral</button>
				<button className={buttonStyles.button}>Negativ</button>
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

export default Page;
