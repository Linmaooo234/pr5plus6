
import { Route, Routes } from "react-router-dom"
import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/Header/Header"
import { HomePage } from "./pages/HomePage/HomePage"
import { CatalogPage } from "./pages/CatalogPage/CatalogPage"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/catalog' element={<CatalogPage/>} />
      </Routes>
    </>
  )
}

export default App
