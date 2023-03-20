import React from "react";
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState(true);

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
		setLoading(false);
	};

	supabase.auth.onAuthStateChange((e, s) => {
		setSession(s);
	});
	return (
		<Layout session={session}>
			{loading ? <></> : <Component {...pageProps} session={session} />}
		</Layout>
	);
}
