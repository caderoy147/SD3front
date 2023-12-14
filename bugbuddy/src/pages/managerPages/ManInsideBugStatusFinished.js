import React from 'react'
import '../../styles/MANstyles/ManInsideBugStatus.css'

const ManInsideBugStatusFinished = () => {
  return (
    <div>
			<div class="head-title">
				<div class="left">
					<h1>null exception</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Project Status</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">null exception</a>
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
								<th>Name</th>
								<th>Position</th>
								<th>Progress</th>
								<th>Proof</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><p>Angelo Jhann Salas</p></td>
								<td><p>Developer</p></td>
								<td><p>Ongoing</p></td>
								<td><button className="ManStatsFinishedBtn">View</button></td>
							</tr>
							
						</tbody>
					</table>
				</div>
				
			</div>

    </div>
  )
}

export default ManInsideBugStatusFinished