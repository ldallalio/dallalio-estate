import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/HomeHero";
import ContactForm from "../components/ContactForm";
import ReviewsSection from "../components/ReviewsSection";
import ListingsSection from "../components/ListingsSection";

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Hero />
				<div className='reviewSection'>
					<ReviewsSection />
				</div>
				<div className='listings'>
					<ListingsSection />
				</div>

				<div className='contact'>
					<ContactForm />
				</div>
			</main>
			<style jsx global>{`
				html,
				body {
					font-family: Lobster;
				}
			`}</style>
		</div>
	);
}
