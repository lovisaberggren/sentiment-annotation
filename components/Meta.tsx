import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
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
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Attitydanalys",
	keywords:
		"sentiment analysis, klassificering, känsloanalys, attitydanalys, classification, annotation",
	description: "Bidra till forskning genom att klassificera texter!",
};

export default Meta;
