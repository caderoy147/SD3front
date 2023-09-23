import React from 'react'
import '../styles/dashboard.css'

const NavBar = () => {
  return (
    <section id="content">
    <nav>
    <i className='bx bx-menu' ></i>
    <a href="#" className="nav-link">Home</a>
    <form action="#">
      <div className="form-input">
        {/* <input type="search" placeholder="Search..."> */}
        <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
      </div>
    </form>
    {/* <input type="checkbox" id="switch-mode" hidden> */}
    <label for="switch-mode" className="switch-mode"></label>
    <a href="#" className="notification">
      <i className='bx bxs-bell' ></i>
      <span className="num">8</span>
    </a>
    <a href="#" className="profile">
      {/* <img src="img/pak.png"> */}
    </a>
  </nav>
  </section>
  )
}

export default NavBar