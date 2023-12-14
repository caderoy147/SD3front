import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewBugMutation } from "./bugsApiSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from "@fortawesome/free-solid-svg-icons";

const NewBugForm = ({ users }) => {
    const [addNewBug, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewBugMutation();

    const navigate = useNavigate();

    const [bugData, setBugData] = useState({
        user:'',
        bugNumber: '',
        severity: '',
        description: '',
        expectedResult: '',
        bugName: '',
        environment: '',
        reproduction: '',
        actualResult: '',
        userId: users && users.length > 0 ? users[0]._id : '',
    });

    useEffect(() => {
        if (isSuccess) {
            setBugData(prevData => ({
                ...prevData,
                bugNumber: '',
                severity: '',
                description: '',
                expectedResult: '',
                bugName: '',
                environment: '',
                reproduction: '',
                actualResult: '',
                userId: '',
            }));
            navigate('/dashboard/team');
        }
    }, [isSuccess, navigate]);

    const canSave = Object.values(bugData).every(Boolean) && !isLoading;

    const onSaveBugClicked = async (e) => {
        e.preventDefault();
        if (canSave) {
            await addNewBug(bugData);

        }
       
    }

    const options = users && users.length > 0
        ? users.map(user => (
            <option key={user._id} value={user._id}>
                {user.username}
            </option>
        ))
        : null;

    const errClass = isError ? "errmsg" : "offscreen";

    const content = (
        <>
            {users === undefined && <p>Loading users...</p>}
            {users !== undefined && users.length === 0 && <p>No users available.</p>}
            {users !== undefined && users.length > 0 && (
                <>
                    <p className={errClass}>{error?.data?.message}</p>
                    <form className="form" onSubmit={onSaveBugClicked}>
                        <div className="form__title-row">
                            <h2>New Bug</h2>
                            <div className="form__action-buttons">
                                <button
                                    className="icon-button"
                                    title="Save"
                                    disabled={!canSave}
                                >
                                    <FontAwesomeIcon icon={faSave} />
                                </button>
                            </div>
                        </div>

                        <label className="form__label" htmlFor="bugNumber">
                            Bug Number:</label>
                        <input
                            className={`form__input`}
                            id="bugNumber"
                            name="bugNumber"
                            type="text"
                            autoComplete="off"
                            value={bugData.bugNumber}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, bugNumber: e.target.value }))}
                        />

                        <label className="form__label" htmlFor="severity">
                            Severity:</label>
                        <input
                            className={`form__input`}
                            id="severity"
                            name="severity"
                            type="text"
                            autoComplete="off"
                            value={bugData.severity}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, severity: e.target.value }))}
                        />

                        <label className="form__label" htmlFor="description">
                            Description:</label>
                        <input
                            className={`form__input`}
                            id="description"
                            name="description"
                            type="text"
                            autoComplete="off"
                            value={bugData.description}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, description: e.target.value }))}
                        />

                        <label className="form__label" htmlFor="expectedResult">
                            Expected result:</label>
                        <input
                            className={`form__input`}
                            id="expectedResult"
                            name="expectedResult"
                            type="text"
                            autoComplete="off"
                            value={bugData.expectedResult}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, expectedResult: e.target.value }))}
                        />

                        <label className="form__label" htmlFor="bugName">
                            Bug Name:</label>
                        <input
                            className={`form__input`}
                            id="bugName"
                            name="bugName"
                            type="text"
                            autoComplete="off"
                            value={bugData.bugName}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, bugName: e.target.value }))}
                        />

                        <label className="form__label" htmlFor="environment">
                            Environment:</label>
                        <input
                            className={`form__input`}
                            id="environment"
                            name="environment"
                            type="text"
                            autoComplete="off"
                            value={bugData.environment}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, environment: e.target.value }))}
                        />

                        <label className="form__label" htmlFor="reproduction">
                            Reproduction:</label>
                        <input
                            className={`form__input`}
                            id="reproduction"
                            name="reproduction"
                            type="text"
                            autoComplete="off"
                            value={bugData.reproduction}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, reproduction: e.target.value }))}
                        />
                        
                        <label className="form__label" htmlFor="actualResult">
                            Actual Result:</label>
                        <input
                            className={`form__input`}
                            id="actualResult"
                            name="actualResult"
                            type="text"
                            autoComplete="off"
                            value={bugData.actualResult}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, actualResult: e.target.value }))}
                        />
                     
                      <label className="form__label form__checkbox-container" htmlFor="user">
                            ASSIGNED TO:</label>
                        <select
                            id="user"
                            name="user"
                            className="form__select"
                            value={bugData.userId}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, user: e.target.value }))}
                        >
                            {options}
                        </select>
                        {/* Repeat the above pattern for other fields (severity, description, etc.) */}
                        {/* ... (Existing JSX code) */}
                        
                        <label className="form__label form__checkbox-container" htmlFor="userId">
                            ASSIGNED TO:</label>
                        <select
                            id="userId"
                            name="userId"
                            className="form__select"
                            value={bugData.userId}
                            onChange={(e) => setBugData(prevData => ({ ...prevData, userId: e.target.value }))}
                        >
                            {options}
                        </select>
                    </form>
                </>
            )}
        </>
    );

    return content;
}

export default NewBugForm;
