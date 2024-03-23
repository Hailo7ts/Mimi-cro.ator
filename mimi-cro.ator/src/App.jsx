import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import data from './data'


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
    </div>
  )
}

export default App
