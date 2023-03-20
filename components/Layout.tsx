import React from "react";
import Meta from "./Meta";
import Nav from "@/components/Nav";
import styles from "@/styles/Layout.module.css";

const Layout = ({ children, ...props }) => {
	return (
		<>
			<Meta />
			<Nav session={props.session} />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
