import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'


const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/popularinwomen') 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
    fetch('http://localhost:4000/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <ParallaxProvider>
    <div>
      <Parallax scale={[0.8,1.3]}>
      <Hero/>
      </Parallax>
      <Popular data={popular}/>
      <Parallax scale={[0.8,1.3]} speed={-10}>
      <Offers/>
      </Parallax>
      <NewCollections data={newcollection}/>
    </div></ParallaxProvider>
  )
}

export default Shop
