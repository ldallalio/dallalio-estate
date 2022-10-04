import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/HomeHero";

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Hero />
			</main>
			<style jsx global>{`
				html,
				body {
					font-family: Lobster;
				}
			`}</style>
			;
		</div>
	);
}
