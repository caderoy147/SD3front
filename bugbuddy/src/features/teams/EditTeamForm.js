import { useState, useEffect } from "react"
import { useUpdateTeamMutation, useDeleteTeamMutation } from "./teamsApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"

const TEAM_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const EditTeamForm = ({ team }) => {

    const [updateTeam, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateTeamMutation()

    const [deleteTeam, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteTeamMutation()

    const navigate = useNavigate()

    const [teamname, setTeamname] = useState(team.teamname)
    const [validTeamname, setValidTeamname] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(team.roles)
    const [active, setActive] = useState(team.active)

    useEffect(() => {
        setValidTeamname(TEAM_REGEX.test(teamname))
    }, [teamname])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess || isDelSuccess) {
            setTeamname('')
            setPassword('')
            setRoles([])
            navigate('/dashboard/team')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onTeamnameChanged = e => setTeamname(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        )
        setRoles(values)
    }

    const onActiveChanged = () => setActive(prev => !prev)

    const onSaveTeamClicked = async (e) => {
        if (password) {
            await updateTeam({ id: team.id, teamname, password, roles, active })
        } else {
            await updateTeam({ id: team.id, teamname, roles, active })
        }
    }

    const onDeleteTeamClicked = async () => {
        await deleteTeam({ id: team.id })
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    let canSave
    if (password) {
        canSave = [roles.length, validTeamname, validPassword].every(Boolean) && !isLoading
    } else {
        canSave = [roles.length, validTeamname].every(Boolean) && !isLoading
    }

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validTeamClass = !validTeamname ? 'form__input--incomplete' : ''
    const validPwdClass = password && !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''


    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Team</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSaveTeamClicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button
                            className="icon-button"
                            title="Delete"
                            onClick={onDeleteTeamClicked}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
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
                    Password: <span className="nowrap">[empty = no change]</span> <span className="nowrap">[4-12 chars incl. !@#$%]</span></label>
                <input
                    className={`form__input ${validPwdClass}`}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChanged}
                />

                <label className="form__label form__checkbox-container" htmlFor="team-active">
                    ACTIVE:
                    <input
                        className="form__checkbox"
                        id="team-active"
                        name="team-active"
                        type="checkbox"
                        checked={active}
                        onChange={onActiveChanged}
                    />
                </label>

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
export default EditTeamForm