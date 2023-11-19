import React from 'react'
import UsersList from '../../features/users/UsersList'
import TeamsList from '../../features/teams/TeamsList'
import BugsList from '../../features/bugs/BugsList'
import ProfilesList from '../../features/profile/ProfilesList'
import '../../index.css'

const BugStatus= () => {
  return (
        <div className="box-info">
         <div className="table-data">
            <UsersList/>
            <TeamsList/>
            <BugsList/>
            <ProfilesList/>
          </div>
        </div>
  )
}

export default BugStatus