import React from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Header from '../Header/Header'
import SliderMain from '../SliderMain/SliderMain'
export default function Home() {
 
  return <>
   <div className='container'>
   <Header></Header>
  <SliderMain></SliderMain>
  <FeaturedProducts></FeaturedProducts>
   </div>
  
  </>
}
