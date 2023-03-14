import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Contact from "@/components/Contact";
import Meta from "@/components/Meta";
import buttonStyles from "@/styles/Button.module.css";

export default function Info({ session }) {
	const router = useRouter();

	useEffect(() => {
		if (!session) {
			router.push("/");
		}
	}, [session]);

	return (
		<>
			<Meta title="Info & guidning | Attitydanalys" />
			<h1>Hur vet jag vilken klass jag ska välja? 👍 👎</h1>
			<p>
				När du väljer en klass till en text, fokusera på skribentens känsla.
				Vilket språk använder personen? Vad tror du hen känner eller vilken
				känsla vill hen förmedla? Fokusera alltså inte på vad du själv tycker om
				texten eller ämnet, utan vilken känsla skribenten har.
			</p>
			<p>
				Viktigt! Om du inte kan välja en passande klass, välj inte neutral. Den
				neutrala klassen ska endast användas för texter som du tycker är
				neutrala. Använd i så fall “hoppa över”.
			</p>
			<p>
				👍 Positiva texter kan vara texter där skribenten är glad, gillar något,
				tycker något är roligt eller liknande.
			</p>
			<p>
				👎 Negativa texter kan vara texter där skribenten är arg, besviken,
				ledsen eller har någon annan “negativ” känsla.
			</p>
			<p>
				😐 Neutrala texter är texter där det inte framgår vad skribenten har för
				känsla, eller där skribenten skriver på ett emotionellt neutralt sätt.
			</p>
			<p>
				Om du ser en text där det finns både positiva och negativa delar, välj
				den som framgår mest. Om texten är lika mycket positiv som negativ, välj
				neutral eller hoppa över om du är osäker.
			</p>
			<p>
				Sist men inte minst, det finns inga rätta eller felaktiga svar! Jag vill
				veta vad du tycker, och det är det som är det rätta.
			</p>
			<p>Tack för hjälpen! 💖</p>
			<Link className={buttonStyles.button1} href="/label">
				Börja klassificera!
			</Link>
			<Contact />
		</>
	);
}
