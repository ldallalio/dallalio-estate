import React, { useEffect, useContext, useState } from 'react'
import  SearchContext  from '../context/SearchContext'
// https://codepen.io/freshmasterj/pen/qZgVrz




function Search() {
    const searchResults = useContext(SearchContext);

    function onSubmit(e) {
        e.preventDefault()
        const userInput = document.querySelector('.search-input').value;
        const searchBy = document.querySelector('.searchByFilter').innerText;
        const minPrice = document.querySelector('.minPriceValue').innerText.replace(/[^\d-]/g, '')+ "000";;
        const maxPrice = document.querySelector('.maxPriceValue').innerText.replace(/[^\d-]/g, '')+ "000";;
         searchResults.setSearchResults({userInput, searchBy, minPrice, maxPrice});
       
    }

    function openMenu(e) {
        if (e.target.className == "searchByFilter") {
        // SearchByFilter
              const locationDropDown = document.querySelector(".dropdown")
            if (locationDropDown.classList[2] === "hidden") {
                locationDropDown.classList.remove("hidden")
                document.getElementsByClassName("dropdown")[1].classList.add("hidden");
                 document.getElementsByClassName("dropdown")[2].classList.add("hidden");
            } else {
                locationDropDown.classList.add("hidden");
            }
     } else if (e.target.className == "minPriceValue"){
        //  Min Price
         const locationDropDown = document.getElementsByClassName("dropdown")[1]
            if (locationDropDown.classList[2] === "hidden") {
                locationDropDown.classList.remove("hidden")
                document.getElementsByClassName("dropdown")[0].classList.add("hidden");
                 document.getElementsByClassName("dropdown")[2].classList.add("hidden");
            } else {
                locationDropDown.classList.add("hidden");
            }
     } else if (e.target.className == "maxPriceValue") {
        // Max Price
          const locationDropDown = document.getElementsByClassName("dropdown")[2]

            if (locationDropDown.classList[2] === "hidden") {
                locationDropDown.classList.remove("hidden")
                document.getElementsByClassName("dropdown")[1].classList.add("hidden");
                 document.getElementsByClassName("dropdown")[0].classList.add("hidden");
            } else {
                locationDropDown.classList.add("hidden");
            }
     }
        
        
      
    
    }
    useEffect(() => {
        // SearchBy
        document.querySelector("#searchBy").addEventListener("click", (e) => {
            document.querySelector(".searchByFilter").innerText = e.target.innerText;
            document.querySelector('.dropdown').classList.add("hidden")
        })
        // Min Price
         document.querySelector("#minPrice").addEventListener("click", (e) => {
            document.querySelector(".minPriceValue").innerText = e.target.innerText;
            document.querySelector("#minPrice").classList.add("hidden");
        })
        // Max Price
         document.querySelector("#maxPrice").addEventListener("click", (e) => {
            document.querySelector(".maxPriceValue").innerText = e.target.innerText
            document.querySelector("#maxPrice").classList.add("hidden");
        })
    },[])
   
  return (
      <>
          <div className="searchHomePage">
          <form>
                  <input className='search-input' type="search" name="search" id="id" placeholder='Ex: Baton Rouge...' />
                  <button type='button'  onClick={openMenu}><p className='search-description'>Search By</p><p className='searchByFilter'>City</p></button>
                  <ul id='searchBy'  className='dropdown slide-top hidden'>
                      <li><p>City</p></li>
                      <li><p>Zipcode</p></li>  
                  </ul>
                  <button type='button' onClick={openMenu}><p className='search-description'>Min Price</p><p className='minPriceValue'>0</p></button>
                  <ul id="minPrice" className='dropdown slide-top hidden'>
                      <li value={100000}>0</li>
                      <li value={100000}>100K</li>
                      <li value={200000}>200K</li>
                      <li value={300000}>300K</li>  
                      <li value={400000}>400K</li>  
                      <li value={500000}>500K</li>  
                      <li value={1000000}>999K</li>

                  </ul>
                  <button type='button' onClick={openMenu}><p className='search-description'>Max Price</p><p className='maxPriceValue'>-</p></button><ul id="maxPrice"  className='dropdown slide-top hidden'>
                      <li value={100000}>100K</li>
                      <li value={200000}>200K</li>
                      <li value={300000}>300K</li>  
                      <li value={400000}>400K</li>  
                      <li value={500000}>500K</li>  
                      <li value={1000000}>900K</li>  
                  </ul>
                <button className='search-btn' type="button" onClick={onSubmit}>Search</button>
          </form>
        </div>
      </>
  )
}

export default Search