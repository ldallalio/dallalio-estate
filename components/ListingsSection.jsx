import React, { useState, useEffect } from "react";
import Image from "next/image";

function ListingsSection() {
	const [loading, setLoading] = useState(true);
	const [listings, setListings] = useState();

	useEffect(() => {
		getListings();
	}, []);

	const getListings = async () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "99907a0195mshef121eb486d186dp1a1b71jsnaac77bf28187",
				"X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
			},
		};

		await fetch(
			"https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=70726&offset=0&limit=42",
			options,
		)
			.then((response) => response.json())
			.then((response) => {
				setListings(response.data.home_search.results);
				console.log(listings);
				setLoading(false);
			})

			.catch((err) => console.error(err));
	};

	if (loading) {
		return <h1>Loading...</h1>;
	} else {
		return listings.map((listing) => {
			return (
				<div className='listingItem' key={listing.property_id}>
					<Image
						src={listing.photos[0].href}
						alt='listing'
						width={500}
						height={500}
						// blurDataURL="data:..." automatically provided
						// placeholder='blur' // Optional blur-up while loading
					/>
					<h3>{listing.location.address.line}</h3>
					<h3>{listing.location.address.city}</h3>
					<h3>{listing.list_price}</h3>
				</div>
			);
		});
	}
}

export default ListingsSection;
