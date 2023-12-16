import React from 'react'
import '../../styles/DEVstyles/DEVprojectstatus.css'
import DEVinsideBugStatusList from '../../components/comDev/DEVinsideBugStatusList'
import DEVinsideBugStatusCall from '../../components/comDev/DEVinsideBugStatusCall'


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
						<tbody>
							<DEVinsideBugStatusList/>
						</tbody>
					</table>
				</div>
		
			</div>





    </div>
  )
}

export default DEVinisdebugstatus