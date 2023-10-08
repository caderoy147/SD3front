import React from 'react'
import UsersList from '../features/users/UsersList'
import '../index.css'

const Team = () => {
  return (
    <section id="content">
      <main>
        <div className="box-info">
         <div className="table-data">
            <UsersList/>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Team