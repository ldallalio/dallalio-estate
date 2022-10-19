import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import  SearchContext  from '../context/SearchContext'

function ListingsSection() {
  const results = useContext(SearchContext);
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState();
  const [location, setLocation] = useState();
  const { searchResults } = results;

  useEffect(() => {
    
    if (searchResults != 1) {
        getEverything()
    } else {
      console.log('no results')
    }
    
  }, [results]);

  const getLocation = async () => {
    const tempLocation = {};
          const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'd90d7f2844msh80112eace64a641p162959jsn05279eb4dc4f',
          'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
        }
      };

     const myLocation =  await fetch(`https://us-real-estate.p.rapidapi.com/location/suggest?input=${searchResults.userInput}`, options)
     .then(response => response.json())
     .then(async (response) => {
       tempLocation = { state: response.data[0].state_code, city: response.data[0].city.split(' ').join('%') }
       return tempLocation;
      })
      .catch(err => console.error(err));
      
    return myLocation;
  }

  const getListings = async (data) => {
    const myLocation = await getLocation()
    console.log('🚀 ~ file: ListingsSection.jsx ~ line 46 ~ getListings ~ myLocation', myLocation)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_SECRET_KEY,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };
    await fetch(
      `https://us-real-estate.p.rapidapi.com/v2/for-sale?offset=0&limit=12&state_code=${myLocation.state}&city=${myLocation.city}&sort=newest&price_min=${searchResults.minPrice}&price_max=${searchResults.maxPrice}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('🚀 ~ file: ListingsSection.jsx ~ line 60 ~ .then ~ response', response)
        setListings(response.data.home_search.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const getEverything = async() => {
    await getListings()
  }
  if (loading && results.searchResults === 1) {
    return <h1></h1>;
  } else if (loading) {
    return <h1>Loading...</h1>;
  }
  return listings.map((listing) => (
    <div className="listingItem" key={listing.property_id}>
      <Image
        src={listing.photos[0].href}
        alt="listing"
        width={500}
        height={500}
      />
      <h3>{listing.location.address.line}</h3>
      <h3>{listing.location.address.city}</h3>
      <h3>{listing.list_price}</h3>
    </div>
  ));
}

export default ListingsSection;
