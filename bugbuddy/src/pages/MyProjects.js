import React from 'react'
import '../index.css'

import BugsList from '../features/bugs/BugsList'

const MyProjects = () => {
  return (
		<section id="content">
			<main>
				<div className="box-info">
						
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

				</div>
			</main>
		</section>

  )
}

export default MyProjects