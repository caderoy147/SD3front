import { useState, useEffect } from "react"
import { useAddNewTeamMutation } from "./teamsApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"

const TEAM_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const NewTeamForm = () => {

    const [addNewTeam, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewTeamMutation()

    const navigate = useNavigate()

    const [teamname, setTeamname] = useState('')
    const [validTeamname, setValidTeamname] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(["Employee"])

    useEffect(() => {
        setValidTeamname(TEAM_REGEX.test(teamname))
    }, [teamname])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        if (isSuccess) {
            setTeamname('')
            setPassword('')
            setRoles([])
            navigate('/dashboard/team')
        }
    }, [isSuccess, navigate])

    const onTeamnameChanged = e => setTeamname(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setRoles(values)
    }

    const canSave = [roles.length, validTeamname, validPassword].every(Boolean) && !isLoading

    const onSaveTeamClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewTeam({ teamname, password, roles })
        }
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validTeamClass = !validTeamname ? 'form__input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''


    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveTeamClicked}>
                <div className="form__title-row">
                    <h2>New Team</h2>
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
                <label className="form__label" htmlFor="teamname">
                    Teamname: <span className="nowrap">[3-20 letters]</span></label>
                <input
                    className={`form__input ${validTeamClass}`}
                    id="teamname"
                    name="teamname"
                    type="text"
                    autoComplete="off"
                    value={teamname}
                    onChange={onTeamnameChanged}
                />

                <label className="form__label" htmlFor="password">
                    Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span></label>
                <input
                    className={`form__input ${validPwdClass}`}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChanged}
                />

                <label className="form__label" htmlFor="roles">
                    ASSIGNED ROLES:</label>
                <select
                    id="roles"
                    name="roles"
                    className={`form__select ${validRolesClass}`}
                    multiple={true}
                    size="3"
                    value={roles}
                    onChange={onRolesChanged}
                >
                    {options}
                </select>

            </form>
        </>
    )

    return content
}
export default NewTeamForm