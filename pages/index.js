import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { supabase } from "./../lib/supabaseClient";

function Page({ text, error }) {
	return (
		<ul>
			<li key={text.id}>{text.text}</li>
		</ul>
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
