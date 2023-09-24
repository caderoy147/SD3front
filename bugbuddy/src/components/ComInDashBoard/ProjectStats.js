import React from 'react'

const ProjectStats = () => {
  return (
    <div>
			<section id="content">
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
							<i className='bx bxs-group' ></i>
							<span className="text">
								<h3>1</h3>
								<p>Finished Projects</p>
							</span>
						</li>
						<li>
							<i className='bx bxs-dollar-circle' ></i>
							<span className="text">
								<h3>$5</h3>
								<p>Total Tip</p>
							</span>
						</li>
					</ul>
				</main>
			</section>
    </div>
  )
}

export default ProjectStats