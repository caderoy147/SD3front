import React from 'react'

const DevQAInisideTheBug = () => {
  return (
    <div>
			<div class="head-title">
				<div class="left">
					<h1>auth state bug</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Bug Workspace</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a href="#">Parking System</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">auth state bug</a>
						</li>
					</ul>
				</div>
			</div>


			<div class="update">
				<div class="chat-updates">
					<i class='gg-profile'></i>
                    <div class="chats-holder">
                        <h1>Benedict Enjambre</h1>
                        <p>Good morning! Discussion will be on Thursday na sa laboratory during our lab. No meeting for today, sorry for the delayed announcements</p>
                        
                        <div class="user-input-box">
							<input class= "input"
									type="text"
									id="Reply"
									name="Reply"
									placeholder="Reply"/>
						</div>
                    </div>
				</div>
                <div class="chat-updates">
					<i class='gg-profile'></i>
                    <div class="chats-holder">
                        <div class="chats">
                            <h1>Benedict Enjambre</h1>
                            <p>Good morning! Discussion will be on Thursday na sa laboratory during our lab. No meeting for today, sorry for the delayed announcements</p>

							<div class="user-input-box">
								<input class= "input"
										type="text"
										id="Reply"
										name="Reply"
										placeholder="Reply"/>
							</div>
                        </div>
                    </div>
				</div>
				<div class="start-conversation">
					<input class= "input"
							type="text"
							id="Reply"
							name="Reply"
							placeholder="Start new conversation"/>
				</div>
                <button class="update-post">Post</button>
			</div>

    </div>
  )
}

export default DevQAInisideTheBug