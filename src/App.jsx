
import './App.css'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import MenuBar from './Components/MenuBar'
import NavBar from './Components/NavBar'
import TableDish from './Components/TableDish'

function App() {


  return (
    <>
       <NavBar/>
       <HeroSection/>
       <div className='p-5'>  <MenuBar /></div>
      
       <TableDish/>
       <Footer/>


    </>
  )
}

export default App
