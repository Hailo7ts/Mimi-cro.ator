import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import data from './data'
import Footer from './components/Footer'


function App() {
  const cardData = data.map((card)  => {
    return <Card 
      key = {card.id}
      {...card}//spread
    />})
  
  return (
    <div>
      <Header />
      <Main />
      <section className="card-list">
        {cardData}
      </section>
      <Footer />
    </div>
  )
}

export default App
