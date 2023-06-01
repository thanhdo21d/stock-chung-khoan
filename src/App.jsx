
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './header/Header'
import Price from './Price/Price'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/price' element={<Price/> } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
