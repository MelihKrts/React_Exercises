import React, { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

const Header = () => {
  return (
    <header>
      <h1>Cat API Axios</h1>
    </header>
  )
}

const CatContainer = () => {
  const [showCat, setShowCat] = useState([])

  useEffect(() => {
    const API_URL = "https://api.thecatapi.com/v1/breeds";
    axios.get(API_URL)
      .then(response => {
        console.log(response.data);
        setShowCat(response.data)
      }
      )
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <section>
      <p>Currently {showCat.length} Cat</p>

      <div className='cat-wrapper'>
        {showCat.map((cats, index) => {
          return (
            <div className='cat-box' key={index}>
              <div className='cat-name'>
                {cats.name}
              </div>

              <div className='temperament'>
                {cats.temperament}
              </div>

              <div className='origin'>
                <span>Origin: </span> {cats.origin}
              </div>

              <div className='cat-description'>
                <p >{cats.description}</p>
              </div>

            </div>
          )

        })}
      </div>

    </section >
  )
}

function App() {



  return (
    <>
      <Header />
      <CatContainer />
    </>
  )
}

export default App
