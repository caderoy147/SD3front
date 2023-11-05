import React , { useState } from 'react'
import Todo from '../../components/ComInDashBoard/Todo'
import ProjectStats from '../../components/ComInDashBoard/ProjectStats'
import RecentProjects from '../../components/ComInDashBoard/RecentProjects'
import '../../index.css'
import '../../styles/dashboard.css'


const Dashboard = () => {



  return (
    <div>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>

      <ProjectStats />
        <div className="sameBoxTodoRp">
          <RecentProjects />
          <Todo />
        </div>
      
    </div>
  )
}

export default Dashboard