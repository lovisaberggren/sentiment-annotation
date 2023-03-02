import React from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

const Instruction = ({ session }) => {
	return (
		<>
			<div>Instruktioner!</div>
			<button onClick={() => supabase.auth.signOut()}>Sign out</button>
			<button>
				<Link href="/label">Label</Link>
			</button>
		</>
	);
};

export default Instruction;
