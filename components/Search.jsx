import React, {useEffect} from 'react'
// https://codepen.io/freshmasterj/pen/qZgVrz




function Search() {
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
            document.querySelector(".maxPriceValue").innerText = e.target.innerText;
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
                  <button type='button' onClick={openMenu}><p className='search-description'>Min Price</p><p className='minPriceValue'>-</p></button>
                  <ul  id="minPrice" className='dropdown slide-top hidden'>
                      <li>100K</li>
                      <li>200K</li>  
                  </ul>
                  <button type='button' onClick={openMenu}><p className='search-description'>Max Price</p><p className='maxPriceValue'>-</p></button><ul id="maxPrice"  className='dropdown slide-top hidden'>
                      <li>200k</li>
                      <li>300k</li>  
                  </ul>
                <button className='search-btn' type="submit">Search</button>
          </form>
        </div>
      </>
  )
}

export default Search