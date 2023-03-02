import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import { Session } from "@supabase/supabase-js";

export default function App({ Component, pageProps }) {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		handleSession();
	}, []);

	const handleSession = async () => {
		const { data, error } = await supabase.auth.getSession();
		if (data.session) {
			setSession(data.session);
		} else {
			if (error) {
				console.log("ERROR: " + error);
			}
		}
	};

	supabase.auth.onAuthStateChange((e, s) => {
		setSession(s);
	});
	return (
		<Layout>
			<Component {...pageProps} session={session} />
		</Layout>
	);
}
