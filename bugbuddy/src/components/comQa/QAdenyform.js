import React from 'react'
import '../../styles/QAstyles/QAdenyform.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const QAdenyform = ({onClose}) => {
  return (
  <div>
    <div class="QAcontainer">
     <div class="QAcloseDenyForm"><FontAwesomeIcon icon={faCircleXmark} onClick={onClose}/></div>
      <div class="title">Message:</div>
        <div class="content">
          <form action="#">

          <div class="center-container">
            <div class="input-container">
            <input type="text" id="myInput" placeholder="Enter Text..."/>
            </div>
          </div>

          <p id="proof-text">Proof:  
          <input type="file" id="fileInput" name="image"/>
          <button id="uploadButton" type="button">Attach Image</button>
          </p>

          </form>
        </div>


        <div class="bot">
          <div class="custom-button">
            <button>Confirm Deny</button>
          </div>
        </div> 
        


          

        
        </div>


      </div>    
  )
}

export default QAdenyform