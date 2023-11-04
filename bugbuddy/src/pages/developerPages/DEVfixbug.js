import React from 'react'

const DEVfixbug = () => {
  return (
    <div>
	<section id="content">

		<main>
			<div class="head-title">
				<div class="left">
						<h1>null exception</h1>
						<ul class="breadcrumb">
							<li>
								<a href="#">Bug Status</a>
							</li>
							<li><i class='bx bx-chevron-right' ></i></li>
							<li>
								<a href="#">Parking System</a>
							</li>
							<li><i class='bx bx-chevron-right' ></i></li>
							<li>
								<a class="active" href="#">null exception</a>
							</li>
						</ul>
				</div>	
				<div class="display-text">
					<h1>Name</h1>
					<p>Ken Vincent Fernandez</p>
				</div>
				<div class="display-text">
					<h1>Position</h1>
					<p>Developer</p>
				</div>
				<div class="display-text">
					<h1>Progress</h1>
					<p>Finished</p>
				</div>
			</div>

			<div class="table-data-container">
				<div class="table-data">
					<h1>Message</h1>
					<div class="message-box">
						<p>I was able to fix bug by applying ...</p>
					</div>
				</div>
				<div class="table-data">
					<h1>Proof</h1>
					<button class="attach-image">Attach Image</button>
				</div>
				<div class="table-data">
					<button>Submit to QA</button>
					<button>Exit</button>
				</div>
			</div>	
		</main>

	</section>

    </div>
  )
}

export default DEVfixbug