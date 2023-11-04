import React from 'react'
import '../../styles/QAstyles/AcceptOrDeny.css'
const QAacceptOrDeny = () => {
  return (
    
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Null Exception</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Bug Status</a>
                </li>
                <li><i class='bx bx-chevron-right' ></i></li>
                <li>
                  <a href="#">Parking System</a>
                </li>
                            <li><i class='bx bx-chevron-right' ></i></li>
                            <li><a class="active" href="#">Null Exception</a></li>
              </ul>
            </div>
          </div>
          <div class="table-data">
            <div class="order">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Progress</th>
                    <th>Proof</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Rafael D. Sanchez</p>
                    </td>
                    <td>Developer</td>
                    <td>Finished</td>
                    <td><a href="#"><span class="status completed">View</span></a></td>
                  </tr>
                </tbody>
              </table>
                  <div class="button-container">
                      <button class="blue-button">Accept</button>
                      <button class="red-button">Deny</button>
                  </div>
            </div>
        </div>
		  </main>



  )
}

export default QAacceptOrDeny