import React from 'react'

const ProjectStats = () => {
  return (
    <div>
				<main>
						<ul className="box-info">
						<li>
							<i className='bx bxs-calendar-check' ></i>
							<span className="text">
								<h3>2</h3>
								<p>Ongoing Projects</p>
							</span>
						</li>
						<li>
							<i className='bx bxs-calendar-check' ></i>
							<span className="text">
								<h3>1</h3>
								<p>Finished Projects</p>
							</span>
						</li>
						<li>
							<i className='bx bxs-group' ></i>
							<span className="text">
								<h3></h3>
								<p>Team Members</p>
							</span>
						</li>
					</ul>
				</main>
    </div>
  )
}

export default ProjectStats