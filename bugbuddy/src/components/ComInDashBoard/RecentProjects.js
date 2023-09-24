import React from 'react'

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
                <tr>
                  <td>
                    <img src="img/pak.png"/>
                    <p>Rafael Sanchez</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status completed">Finished</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/pak.png"/>
                    <p>Rafael Sanchez</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/pak.png"/>
                    <p>Rafael Sanchez</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status process">Ongoing</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="img/pak.png"/>
                    <p>Rafael Sanchez</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    {/* <img src="img/pak.png"> */}
                    <p>Rafael Sanchez</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status completed">Ongoing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  )
}

export default RecentProjects