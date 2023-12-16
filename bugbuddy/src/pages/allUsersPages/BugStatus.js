import React from 'react'
import UsersList from '../../features/users/UsersList'
import TeamsList from '../../features/teams/TeamsList'
import BugsList from '../../features/bugs/BugsList'
import ProfilesList from '../../features/profile/ProfilesList'
import '../../index.css'

const BugStatus= () => {
  return (
      <div>
        <div class="head-title">
            <div class="left">
            <h1>Bug Status</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Bugs Status</a>
              </li>
              <li>
                <i class='bx bx-chevron-right'></i>
              </li>
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>




        <div className="box-info">
          <div className="table-data">
            <div className="order">
               <TeamsList/> 
            </div>
          </div>
        </div>
      </div>
  )
}

export default BugStatus