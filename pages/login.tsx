import React from "react";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { AiFillLike, AiOutlineExclamationCircle } from "react-icons/ai";
import { supabase } from "@/lib/supabaseClient";
import Meta from "@/components/Meta";
import styles from "@/styles/Layout.module.css";
import buttonStyles from "@/styles/Button.module.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [emailSent, setEmailSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

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
		setLoading(true);
		setIsError(false);
		try {
			const { data, error } = await supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: getURL.toString(),
				},
			});
			if (error) throw error;
			else {
				setLoading(false);
				setEmailSent(true);
			}
		} catch (error) {
			if (error.status === 400) {
				setErrorMessage("Kontrollera att epostadressen är korrekt!");
			} else {
				setErrorMessage("Något gick fel...");
			}
			setLoading(false);
			setIsError(true);
			console.log(error.error_description, error.message);
		}
	};

	return (
		<>
			<Meta title="Logga in | Attitydanalys" />
			<div className={styles.logindiv}>
				<h2>Logga in eller registrera dig</h2>
				<p>
					Skriv in din epostadress nedan så skickas ett mejl till dig med en
					länk för inloggning!
				</p>
				<input
					className={styles.input}
					type="email"
					placeholder="Epostadress"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					className={buttonStyles.button1}
					onClick={(e) => {
						e.preventDefault();
						handleLogin(email);
					}}
				>
					Skicka länken
				</button>

				{isError ? (
					<p className={styles.errormessage}>
						<AiOutlineExclamationCircle />
						{errorMessage}
					</p>
				) : (
					<>
						{emailSent ? (
							<p className={styles.confirmation}>
								<AiFillLike />
								En länk har skickats till din mejl!
							</p>
						) : loading ? (
							<Oval
								height="40"
								width="40"
								color="green"
								ariaLabel="loading"
								wrapperClass="spinner"
							/>
						) : (
							<></>
						)}{" "}
					</>
				)}
			</div>
		</>
	);
}
