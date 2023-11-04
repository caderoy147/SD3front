import React from 'react'


const QAdenyform = () => {
  return (
  <div>
    <div class="container">
      <div class="title">Message:</div>
        <div class="content">
          <form action="#">

          <div class="center-container">
            <div class="input-container">
            <input type="text" id="myInput" placeholder="Enter Text..."/>
            </div>
          </div>

          <p id="proof-text">Proof:  
          <input type="file" id="fileInput" name="image" style="display: none;"/>
          <button id="uploadButton" type="button">Attach Image</button>
          </p>

          </form>
        </div>

        </div>

        <div class="bot">
          <div class="custom-button">
            <button>Confirm Deny</button>
          </div>
        </div> 
      </div>    
  )
}

export default QAdenyform