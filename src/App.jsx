import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Cep from './Pages/Cep/Cep'
import Cnpj from './Pages/Cnpj/Cnpj'
import Fipe from './Pages/Fipe/Fipe'




function App() {

  return (
      <BrowserRouter>
          <Header title="Me Ajuda Aí!" />
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Cep' element={<Cep />} />
              <Route path='/Cnpj' element={<Cnpj />} />
              <Route path='/Fipe' element={<Fipe />} />
            </Routes>
          </div>
      </BrowserRouter>
  )

}

export default App
