import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	AiTwotoneHome,
	AiOutlineArrowRight,
	AiFillExclamationCircle,
	AiFillEdit,
} from "react-icons/ai";
import { supabase } from "@/lib/supabaseClient";
import navStyles from "@/styles/Nav.module.css";

const Nav = ({ session }) => {
	const router = useRouter();

	return (
		<nav className={navStyles.nav}>
			<ul className={navStyles.collapseul}>
				<li>
					<Link
						href="/"
						className={
							router.pathname == "/" ? navStyles.active : navStyles.nonActive
						}
					>
						<AiTwotoneHome />
						Start
					</Link>
				</li>

				{session ? (
					<>
						<li>
							<Link
								href="/info"
								className={
									router.pathname == "/info"
										? navStyles.active
										: navStyles.nonActive
								}
							>
								<AiFillExclamationCircle />
								Info
							</Link>
						</li>
						<li>
							<Link
								href="/label"
								className={
									router.pathname == "/label"
										? navStyles.active
										: navStyles.nonActive
								}
							>
								<AiFillEdit />
								Klassificera
							</Link>
						</li>
					</>
				) : (
					<></>
				)}
			</ul>
			<ul>
				{session ? (
					<li>
						<a onClick={() => supabase.auth.signOut()}>
							Logga ut <AiOutlineArrowRight />
						</a>
					</li>
				) : (
					<li>
						<Link href="/login">
							Logga in <AiOutlineArrowRight />
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
