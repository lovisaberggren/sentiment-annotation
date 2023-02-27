import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
	const [email, setEmail] = useState("");

	const handleLogin = async (email) => {
		try {
			const { data, error } = await supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: "http://localhost:3000/",
				},
			});
			if (error) throw error;
			alert("Check your email for the login link!");
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};

	return (
		<div>
			<p>Sign in via magic link with your email below</p>
			<input
				type="email"
				placeholder="Your email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					handleLogin(email);
				}}
			>
				<span>Send magic link</span>
			</button>
		</div>
	);
}
