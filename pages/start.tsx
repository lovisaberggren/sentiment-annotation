import React from "react";
import Link from "next/link";
import Contact from "@/components/text/Contact";
import buttonStyles from "@/styles/Button.module.css";
import About from "@/components/text/About";
import AppClosed from "@/components/info/AppClosed";

export default function Start({ session }) {
	return (
		<>
			<AppClosed />
			<About />
			<Link
				className={buttonStyles.button1}
				href={session ? "/info" : "/login"}
			>
				Sätt igång!
			</Link>
			<Contact />
		</>
	);
}
