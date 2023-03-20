import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ session }) {
	const router = useRouter();

	useEffect(() => {
		if (!session) {
			router.push("/start");
		}
		if (session) {
			router.push("/info");
		}
	}, [session]);

	return <></>;
}
