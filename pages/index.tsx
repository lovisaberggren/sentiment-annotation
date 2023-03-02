import React from "react";
import Login from "../components/Login";
import Instruction from "../components/Instruction";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

export default function Home() {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		handleSession();
	}, []);

	const handleSession = async () => {
		const { data, error } = await supabase.auth.getSession();
		if (data.session) {
			setSession(data.session);
			console.log("data.session: ", data.session);
			console.log("error: ", error);
		} else {
			if (error) {
				console.log("ERROR: " + error);
			}
		}
	};

	return (
		<main>{!session ? <Login /> : <Instruction session={session} />}</main>
	);
}
