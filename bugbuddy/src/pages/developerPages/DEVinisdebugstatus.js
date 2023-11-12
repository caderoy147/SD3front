import React from 'react'
import '../../styles/DEVstyles/DEVprojectstatus.css'

const DEVinisdebugstatus = () => {
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
						
					</div>
					<table>
						<thead>
							<tr>
								<th>Bug Name</th>
								<th>Date Assigned</th>
								<th>Deadline</th>
								<th>Action</th>
								<th>Remarks</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><p>null exception</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><button class="green-button-DEVprojectstatus">View</button></td>
								<td><p>Accepted</p></td>
							</tr>
							<tr>
								<td><p>database spike</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><button class="red-button-DEVprojectstatus">Review</button></td>
								<td><p>Denied</p></td>
							</tr>
							<tr>
								<td><p>auth stat bug</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><button className="DEVprojectstatus">Fix</button></td>
								<td><p>In Progress</p></td>
							</tr>
							<tr>
								<td><p>css bugs</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><button class="green-button-DEVprojectstatus">View</button></td>
								<td><p>In Progress</p></td>
							</tr>
							<tr>
								<td><p>null exception</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>9-23-2023</p></td>
								<td><button class="green-button-DEVprojectstatus">View</button></td>
								<td><p>In Progress</p></td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>
    </div>
  )
}

export default DEVinisdebugstatus