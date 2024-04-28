import React, { useEffect, useState } from 'react'
import './App.css'

const Header = () => {
  return (
    <header>
      <h2>Rest Countries API</h2>
    </header>
  )
}

const Countries = () => {
  const [country, setCountry] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc")

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(json => setCountry(json))
      .catch(error => console.error(error))
  }, [])


  function sorted() {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    sortCountry(newOrder)
  }


  function sortCountry(order) {
    const sortedCountries = [...country];
    sortedCountries.sort((a, b) => {
      const nameA = a.name.common;
      const nameB = b.name.common;
      return order === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setCountry(sortedCountries)
  }


  useEffect(() => {
    const apiUrl = selectedRegion
      ? `https://restcountries.com/v3.1/region/${selectedRegion}`
      : "https://restcountries.com/v3.1/all";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        // Check if the response is an array before setting the state
        if (Array.isArray(json)) {
          const defaultSorted = json.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));
          setCountry(defaultSorted);
        } else {
          // Handle the case where the response is not an array (e.g., "Filter by Region" selected)
          setCountry([]);
        }
      })
      .catch((error) => console.error(error));
  }, [selectedRegion]);


  const searchData = country.filter((ctry) => {
    const countryName = ctry.name.common.toLowerCase();
    const countryCapital = (ctry.capital || "").toString().toLowerCase()
    const countryLanguage = Object.values(ctry.languages || {}).map((language) => language.toLowerCase());

    return (
      countryName.includes(search.toLowerCase()) ||
      countryCapital.includes(search.toLowerCase()) ||
      countryLanguage.some((language) => language.includes(search.toLowerCase())) 
    )

  })

  return (
    <section>

      <p className='length'>Currently we have {country.length} countries</p>

      <div className='container'>

        <div className='w-13'>
          <button onClick={sorted} className='btn'>
            {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>

        </div>

        <div className='w-23'>
          <input type='text' placeholder='Enter a Country Name' className='input' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className='w-13'>
          <select name='select' id='select' onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Ocenia</option>
          </select>
        </div>


      </div>

      <div className='country-container'>
        {searchData.map((countries, index) => {

          const { name, flags, capital, languages, population, currencies, region } = countries

          const languageArray = Object.values(languages || {});
          const formatLanguage = languageArray.length > 1 ? "Languages: " : "Language: "

          return (
            <div className='country-box' key={index}>

              <div className='img-box'>
                <img src={flags.png} title={name.common} />
              </div>

              <div className='country-name'>{name.common.toUpperCase()}</div>

              <div className='country-info'>

                <p>
                  <span>Capital:  </span>
                  {capital}
                </p>

                <p>
                  <span>{formatLanguage}</span>
                  {languageArray.join(", ")}
                </p>

                <p>
                  <span>Population: </span>
                  {population.toLocaleString()}
                </p>

                <p>
                  <span>Currency: </span>
                  {currencies
                    ? Object.values(currencies)
                      .map(currency => currency.name.charAt(0).toUpperCase() + currency.name.slice(1))
                      .join(", ")
                    : "N/A"}
                </p>

                <p>
                  <span>Region: </span>
                  {region}
                </p>

              </div>

            </div>
          )
        })

        }
      </div>
    </section>
  )

}

function App() {



  return (
    <>
      <Header />
      <Countries />
    </>
  )
}

export default App
