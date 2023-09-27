import React from 'react'
import BugsList from '../../features/bugs/BugsList'
import Bug1 from '../../features/bugs/Bug1'

const RecentProjects = () => {
  return (
    <section id="content">
      <main>
       <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent Projects</h3>
              <i className='bx bx-search' ></i>
              <i className='bx bx-filter' ></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Assigned</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <BugsList/>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  )
}

export default RecentProjects