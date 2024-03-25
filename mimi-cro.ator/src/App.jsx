import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import data from './data'
import Footer from './components/Footer'
import Layout from './components/Layout'
import LoginPage from './components/Pages/LoginPage'
import RegisterPage from './components/Pages/RegisterPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatPost from './components/Pages/CreatePost'


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

        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/create'} element={<CreatPost />} />
      
      
      </Route>      
    </Routes>


    
  )
}

export default App
