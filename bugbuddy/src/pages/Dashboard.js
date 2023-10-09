import React , { useState } from 'react'
import Todo from '../components/ComInDashBoard/Todo'
import ProjectStats from '../components/ComInDashBoard/ProjectStats'
import RecentProjects from '../components/ComInDashBoard/RecentProjects'
import BugReport from '../components/BugReport'; // Import BugReport component
import '../index.css'
import '../styles/dashboard.css'


const Dashboard = () => {
  // Define a state variable to track the visibility of the BugReport component
  const [bugReportVisible, setBugReportVisible] = useState(false);

  // Function to toggle the visibility of the BugReport component
  const toggleBugReport = () => {
    setBugReportVisible(!bugReportVisible);
  };


  return (
    <div>
      <section id="content">
        <main>
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
            <a className="btn-download" onClick={toggleBugReport}>
              <i className='bx bxs-cloud-download' ></i>
              <span className="text">Report a Bug</span>
            </a>
          </div>
        </main>
      </section>
      {!bugReportVisible && (
      <ProjectStats />
      )}
      {!bugReportVisible && (
        <div className="sameBoxTodoRp">
          <RecentProjects />
          <Todo />
        </div>
      )}
      {bugReportVisible && <BugReport />}
    </div>
  )
}

export default Dashboard