import { supabase } from "../lib/supabaseClient";

const Instruction = ({ session }) => {
	return (
		<>
			<div>Instruktioner!</div>
			<button onClick={() => supabase.auth.signOut()}>Sign out</button>
		</>
	);
};

export default Instruction;
