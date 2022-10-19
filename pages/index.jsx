import { useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/HomeHero';
import ContactForm from '../components/ContactForm';
import {useEffect} from 'react'
import ReviewsSection from '../components/ReviewsSection';
import ListingsSection from '../components/ListingsSection';
import MeetSharon from '../components/MeetSharon';
import Search from '../components/Search';
import  SearchContext  from '../context/SearchContext'

export default function Home() {
   const searchResults = useContext(SearchContext);

  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <main className={styles.main}>
        <Hero />
        <div className="reviewSection">
          <ReviewsSection />
        </div>
        <div>
          <MeetSharon/>
        </div>
        <Search />
        <div className="listings">
          <ListingsSection />
        </div>

        <div className="contact">
          <ContactForm />
        </div>
      </main>
      <style jsx global>
        {`
					html,
					body {
						font-family: Open Sans;
					}
				`}
      </style>
    </div>
  );
}
