import React from 'react'
import STA from './Images/STA.png'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "./Nav";

function Header() {
    return (
      <div className='header'>
          <div className='d-flex justify-content-around '>
              <div>
                  <img src={STA} alt="" />
              </div>
              <div className='d-flex align-items-center'>
                  <h2>Tunisian Automobile Company</h2>
              </div>
              <div>
                  <img src={STA} alt="" />
              </div>
          </div>
          <Nav />
      </div>
    )
  }
  
  export default Header