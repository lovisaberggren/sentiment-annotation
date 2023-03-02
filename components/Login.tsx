import React from "react";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
	const [email, setEmail] = useState("");

	const getURL = () => {
		let url =
			process?.env?.NEXT_PUBLIC_SITE_URL ??
			process?.env?.NEXT_PUBLIC_VERCEL_URL ??
			"http://localhost:3000/";
		url = url.includes("http") ? url : `https://${url}`;
		url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
		return url;
	};

	const handleLogin = async (email) => {
		try {
			const { data, error } = await supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: getURL.toString(),
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
