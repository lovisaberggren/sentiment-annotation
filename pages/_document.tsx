import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="sv">
			<Head>
				<link rel="shortcut icon" href="/images/favicon-01.png" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-01.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-02.png"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
