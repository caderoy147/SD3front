import React from 'react'
import UsersList from '../features/users/UsersList'
import '../index.css'

const Team = () => {
  return (
        <div className="box-info">
         <div className="table-data">
            <UsersList/>
          </div>
        </div>
  )
}

export default Team