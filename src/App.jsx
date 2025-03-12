import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturesSection from './components/FeaturesSection'
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <FeaturesSection />
      
    </div>
  );
}

export default App