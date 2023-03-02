import React from "react";
import Login from "../components/Login";
import Instruction from "../components/Instruction";

export default function Home({ session }) {
	return (
		<main>{!session ? <Login /> : <Instruction session={session} />}</main>
	);
}
