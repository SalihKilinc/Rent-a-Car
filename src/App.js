import React from 'react'
import MenuBar from './components/common/MenuBar'
import TopBar from './components/common/TopBar'
import Slider from './components/home/Slider'
import SliderCarousel from './components/home/SliderCarousel'
import SliderForm from './components/home/SliderForm'


const App = () => {
  return (
    <div>
 <TopBar/>
 <MenuBar/>
<Slider/>
<SliderCarousel/>
<SliderForm/>
 
      
    </div>
  )
}

export default App
