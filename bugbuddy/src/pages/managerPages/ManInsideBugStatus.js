import React from 'react'
import '../../styles/MANstyles/ManInsideBugStatus.css'

const ManInsideBugStatus = () => {
  return (
    <div>
			<div class="head-title">
				<div class="left">
					<h1>Parking System</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Bug Status</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Parking System</a>
						</li>
					</ul>
				</div>
			</div>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3></h3>
					</div>
					<table>
						<thead>
							<tr>
								<th>Bug Name</th>
								<th>Date Assigned</th>
								<th>Deadline</th>
								<th>Progress</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><p>auth stat bug</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><p>Ongoing</p></td>
								<td><button className="ManagerInBugBtn">Mark as Done</button></td>
							</tr>
							<tr>
								<td><p>null exception</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><p>Accepted</p></td>
								<td><button className="ManagerInBugBtn">Mark as Done</button></td>
							</tr>
							<tr>
								<td><p>database spike</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><p>Ongoing</p></td>
								<td><button className="ManagerInBugBtn">Mark as Done</button></td>
							</tr>
							<tr>
								<td><p>css bugs</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><p>Ongoing</p></td>
								<td><button className="ManagerInBugBtn">Mark as Done</button></td>
							</tr>
							<tr>
								<td><p>null exception</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><p>Ongoing</p></td>
								<td><button className="ManagerInBugBtn">Mark as Done</button></td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>


	


    </div>
  )
}

export default ManInsideBugStatus