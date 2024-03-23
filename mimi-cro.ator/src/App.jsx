import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import data from './data'
import Footer from './components/Footer'
import Layout from './components/Layout'


function App() {
  const cardData = data.map((card)  => {
    return <Card 
      key = {card.id}
      {...card}//spread
    />})
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {
          <div>
            <Main />
            <section className="card-list">
              {cardData}
            </section>
            <Footer />
          </div>
        }/>

        <Route path={'/login'} element={<div>login page</div>} />
        <Route path={'/register'} element={<div>register page</div>} />
      </Route>

      
    </Routes>


    
  )
}

export default App
