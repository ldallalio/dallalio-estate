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
				"X-RapidAPI-Key": process.env.NEXT_PUBLIC_SECRET_KEY,
				"X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
			},
		};

		await fetch(
			"https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=70726&offset=0&limit=12",
			options,
		)
			.then((response) => response.json())
			.then((response) => {
				setListings(response.data.home_search.results);
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
