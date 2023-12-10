import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import YourParentComponent from '../yourParentComponent';
import { Link } from 'react-router-dom';
import '../../styles/dashboard.css';
import '../../index.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

import DashHeader from '../DashHeader'

const Layout2 = ({ toggleSidebar }) => {
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
  const [contentClass, setContentClass] = useState('');
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const openNotificationModal = () => {
    setIsNotificationModalOpen(true);
  };

  const closeNotificationModal = () => {
    setIsNotificationModalOpen(false);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);

      if (window.innerWidth >= 576) {
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  

  const toggleSidebar1 = () => {
    setIsSidebarHidden(!isSidebarHidden);
    setContentClass(isSidebarHidden ? '' : 'hide-sidebar');
  };

  const toggleSearchForm = (e) => {
    e.preventDefault();
    if (window.innerWidth < 576) {
      setIsSearchFormVisible(!isSearchFormVisible);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  const toggleNotificationModal = () => {
    setIsNotificationModalOpen(!isNotificationModalOpen);
  };



  const menuItems = [
    { icon: 'bx bxs-dashboard', text: 'Dashboard', to: '/dashboard' },
    { icon: 'bx bxs-shopping-bag-alt', text: 'Bug Workspace', to: '/dashboard/bugWorkSpace' },
    { icon: 'bx bxs-group', text: 'Bug Status', to: '/dashboard/bugStatus' },
  ];
  const handleMenuClick = () => {
    toggleSidebar();
    toggleSidebar1();
  };

  return (
    <div>
      <DashHeader/>
      {/* NAVBAR */}
      <section id="content" className={contentClass} >
        <nav>
          <i className='bx bx-menu' onClick={handleMenuClick}></i>
            <Link to="/dashboard" className="nav-link">
              Home
            </Link>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button
                type="submit"
                className="search-btn"
                onClick={toggleSearchForm}
              >
                <i className={`bx ${isSearchFormVisible ? 'bx-x' : 'bx-search'}`}></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" onClick={toggleDarkMode}></label>
          
          <div to="/dashboard/notifications" className="notification" onClick={toggleNotificationModal}>
            <FontAwesomeIcon icon={faBell} />
            <span className="num">4</span>
          </div>
          
          <Link to="/dashboard/profile">
             <FontAwesomeIcon icon={faUser} />
          </Link>
        </nav>

        <Modal
        isOpen={isNotificationModalOpen}
        onRequestClose={closeNotificationModal}
        contentLabel="Notifications"
        className="custom-modal" // Add a custom class
        overlayClassName="custom-overlay" // Add a custom overlay class
      >
        <button  onClick={closeNotificationModal}>Close Notifications</button>
    
        <YourParentComponent />
      </Modal>
      </section>
      {/* NAVBAR */}




      {/* SIDEBAR */}
      <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
        <Link to="/" className="brand">
          <i className='bx bxs-smile'></i>
          <span className="text">Bug Buddy</span>
        </Link>
        <ul className="side-menu top">
          {menuItems.map((item, index) => (
            <li key={index} className={index === activeMenuItem ? 'active' : ''}>
              <Link to={item.to} onClick={() => handleMenuItemClick(index)}>
                <i className={item.icon}></i>
                <span className="text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="/dashboard/settings">
              <i className='bx bxs-cog'></i>
              <span className="text">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="logout">
              <i className='bx bxs-log-out-circle'></i>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
    </div>
  );
};

export default Layout2;
