import { useState, useEffect } from "React";

function ListingsSection() {
	let listings = [];
	let data;

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
			// .then((response) => console.log(data))
			.catch((err) => console.error(err));
	};

	// data = getListings(res).then((res) => res.json());
}

export default ListingsSection;
