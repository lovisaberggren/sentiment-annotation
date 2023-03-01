import Login from "../components/Login";
import Instruction from "../components/Instruction";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		handleSession();
	}, []);

	const handleSession = async () => {
		const { data, error } = await supabase.auth.getSession();
		if (error) {
			console.log("ERROR: " + error);
		}
		setSession(data.session);
		console.log("data.session: ", data.session);
		console.log("error: ", error);
	};

	supabase.auth.onAuthStateChange((e, s) => {
		setSession(s);
	});

	return (
		<main>{!session ? <Login /> : <Instruction session={session} />}</main>
	);
}
