import React from 'react';
import '../../styles/bugReportForm.css'

const BugReport = () => {

  return (
    <div className="body1">
            <title>Bug Report Form</title>
            <div className="containerBug">
              <h1 className="form-title">Bug Report</h1>
              <form action="#">
                <div className="main-user-info">
                  <div className="user-input-box">
                    <label for="bugNumber">Bug Number</label>
                    <span>B10082301</span>
                  </div>
                  <div className="user-input-box">
                    <label for=" Bug Name">Bug Name</label>
                    <input type="text"
                            id="bugName"
                            name="bugName"
                            placeholder="Enter Bug Name"/>
                  </div>
                  <div className="user-input-box">
                    <label for="severity">Severity</label>
                    <select>
                      <option value="critical">critical</option>
                      <option value="high">high</option>
                      <option value="medium">medium</option>
                      <option value="low">low</option>

                    </select>
                  </div>
                  <div className="user-input-box">
                    <label for="environment">Environment</label>
                    <input type="text"
                            id="environment"
                            name="environment"
                            placeholder="Environment"/>
                  </div>
                  <div className="user-input-box">
                    <label for="description">Description</label>
                    <input type="text"
                            id="description"
                            name="description"
                            placeholder="Description"/>
                  </div>
                  <div className="user-input-box">
                    <label for="steps">Steps</label>
                    <input type="text"
                            id="steps"
                            name="steps"
                            placeholder="Steps"/>
                  </div>

                  <div className="user-input-box">
                    <label for="expectedResult">Expected Result</label>
                    <input type="text"
                            id="expectedResult"
                            name="expectedResult"
                            placeholder="Expected Result"/>
                  </div>

                  <div className="user-input-box">
                    <label for="actualResult">Actual Result</label>
                    <input type="text"
                            id="actualResult"
                            name="actualResult"
                            placeholder="Actual Result"/>
                  </div>

                </div>
                
                <div className="form-submit-btn">
                  <input type="submit" value="Report"/>
                </div>
              </form>
            </div>
    </div>
  )
}

export default BugReport