import React from 'react'
import HeroSecEig from '../../Components/HeroSecEig/HeroSecEig';
import HeroSecFir from '../../Components/HeroSecFir/HeroSecFir';
import HeroSecFive from '../../Components/HeroSecFive/HeroSecFive';
import HeroSecFour from '../../Components/HeroSecFour/HeroSecFour';
import HeroSecNine from '../../Components/HeroSecNine/HeroSecNine';
import HeroSecSec from '../../Components/HeroSecSec/HeroSecSec';
import HeroSecSeven from '../../Components/HeroSecSeven/HeroSecSeven';
import HeroSecSix from '../../Components/HeroSecSix/HeroSecSix';
import HeroSecTen from '../../Components/HeroSecTen/HeroSecTen';
import HeroSecThir from '../../Components/HeroSecThir/HeroSecThir';
const Home = () => {
  return (
    <div>
       <HeroSecFir />
              <HeroSecSec />
              <HeroSecFour />
              <HeroSecTen />
              <HeroSecFive />
              {/* <HeroSecThir /> */}
              <HeroSecSix />
              <HeroSecSeven />
              {/* <HeroSecEig /> */}
              <HeroSecNine />
    </div>
  )
}

export default Home
