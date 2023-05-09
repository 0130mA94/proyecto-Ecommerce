//import { useState, useEffect } from 'react'
import "./NavBar.css"
import CardWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from "react-router-dom";


const NavBar = () => {
  //const [category, setCategory] = useState("");

  /*useEffect(() => {
    document.title = `Categoría ${category}`
  }, [category]);

  const handleClick = (category) => {
    setCategory(category);
  }*/

  return (
    <header>
      <Link to={"/"}>
      <h1>La Cueva del comic</h1>
      </Link>

      <nav>
        <ul>
          <li  className='menu'><NavLink to={"/"}>Comics</NavLink></li>
          <li className='menu' ><NavLink to={`/categoria/2`}>Marvel</NavLink></li>
          <li className='menu'><NavLink to={`/categoria/1`}>DC</NavLink></li>

          
        </ul>
      </nav>
      <CardWidget />

    </header>
  )
}

export default NavBar