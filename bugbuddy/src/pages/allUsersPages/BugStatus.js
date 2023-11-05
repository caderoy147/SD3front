import React from 'react'
import UsersList from '../../features/users/UsersList'
import TeamsList from '../../features/teams/TeamsList'
import '../../index.css'

const BugStatus= () => {
  return (
        <div className="box-info">
         <div className="table-data">
            <UsersList/>
            <TeamsList/>
          </div>
        </div>
  )
}

export default BugStatus