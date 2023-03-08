import React from "react";
import Link from "next/link";
import Contact from "@/components/Contact";
import buttonStyles from "@/styles/Button.module.css";

export default function Home({ session }) {
	return (
		<>
			<h1>Om projektet ✨</h1>
			<p>
				Jag skriver just nu mitt examensarbete om känslo-/attitydanalys. Jag ska
				analysera svenska texter i ett socialt medie-sammanhang och ska
				undersöka hur emojis i texter kan användas för att (förhoppningsvis)
				förbättra analysen. För att göra detta behöver jag ett dataset med
				texter där varje text har en klass som “positiv”, “negativ” eller
				“neutral”. Det är där du kommer in!
			</p>
			<p>
				På den här sidan kan du hjälpa mig och forskningen i framtiden genom att
				klassificera texterna för att skapa ett dataset som jag och andra kan
				använda för känsloanalys. Om du kan flytande svenska och är villig att
				hjälpa till kan du enkelt skapa ett konto och sätta igång.
			</p>
			{session ? (
				<Link className={buttonStyles.button1} href="/info">
					Sätt igång!
				</Link>
			) : (
				<Link className={buttonStyles.button1} href="/login">
					Sätt igång!
				</Link>
			)}
			<h2>Hur går det till? 🧐</h2>
			<p>
				När du har skapat ett konto skickas ett mejl till din epostadress med en
				länk. Länken loggar in dig automatiskt och du kan sätta igång. Du kommer
				få en text som visas på skärmen och du kan välja mellan att klassificera
				texten som “positiv”, “negativ” eller “neutral”. Du kan också välja att
				hoppa över texten om du inte vet vad du ska välja eller om texten på
				något sätt skulle vara olämplig (t.ex. om den inte är skriven på
				svenska). Du kan klassificera hur många eller hur få texter som du
				känner för! Det går alltid bra att komma tillbaka senare, och om du då
				skulle vara utloggad kan du enkelt fylla i din epostadress igen för att
				få en ny inloggningslänk.
			</p>
			<p>
				Resultaten kommer att användas i mitt examensarbete och datasetet som
				skapas kommer finnas tillgängligt för allmänheten. Varje person kommer
				få ett eget anonymt användar-id som kommer användas för att separera
				unika klassificerare, således är du anonym och det kommer inte gå att se
				vilka texter du har klassificerat.
			</p>
			<p>
				Exempel: Användare “62” har klassificerat texten “Det var den bästa
				köttbullen jag ätit!” som “positiv”.
			</p>
			<Contact />
		</>
	);
}
