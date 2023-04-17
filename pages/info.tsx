import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ClosingInfo from "@/components/info/ClosingInfo";
import Contact from "@/components/text/Contact";
import Meta from "@/components/Meta";
import buttonStyles from "@/styles/Button.module.css";
import Instructions from "@/components/text/Instructions";

export default function Info({ session }) {
	const router = useRouter();

	useEffect(() => {
		if (!session) {
			router.push("/login");
		}
	}, [session]);

	return (
		<>
			<Meta title="Info & guidning | Attitydanalys" />
			<ClosingInfo />
			<Instructions />
			<Link className={buttonStyles.button1} href="/label">
				Börja klassificera!
			</Link>
			<Contact />
		</>
	);
}
