import React from 'react'
// https://codepen.io/freshmasterj/pen/qZgVrz

function openMenu(e) {
    console.log('open')
    const locationDropDown = document.querySelector(".dropdown")

    if (locationDropDown === "hidden") {
        
        locationDropDown.classList.remove("hidden")
    } else {
        locationDropDown.classList.add("hidden");
    }
    
}
function Search() {
  return (
      <>
          <div className="searchHomePage">
          <form>
                  <input className='search-input' type="search" name="search" id="id" placeholder='Ex: Baton Rouge...' />
                  <button type='button' onClick={openMenu}><p className='search-description'>Search By</p><p>City</p></button>
                  <ul  className='dropdown slide-top hidden'>
                      <li>City</li>
                      <li>Zipcode</li>  
                  </ul>
                  <button><p className='search-description'>Min Price</p><p>-</p></button>
                  <button><p className='search-description'>Max Price</p><p>-</p></button>
                <button className='search-btn' type="submit">Search</button>
          </form>
        </div>
      </>
  )
}

export default Search