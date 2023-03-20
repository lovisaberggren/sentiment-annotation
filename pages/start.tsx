import React from "react";
import Link from "next/link";
import Contact from "@/components/text/Contact";
import buttonStyles from "@/styles/Button.module.css";
import About from "@/components/text/About";

export default function Start({ session }) {
	return (
		<>
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
