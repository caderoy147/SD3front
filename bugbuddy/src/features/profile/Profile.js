import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectProfileById } from './profilesApiSlice'
import '../../styles/tempProfile.css'

const Profile = ({ profileId }) => {

    const profile = useSelector(state => selectProfileById(state, profileId))

    const navigate = useNavigate()

    if (profile) {
        const created = new Date(profile.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(profile.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/profiles/${profileId}`)

        return (
            // Inside the Profile component
            <tr className="table__row">
                <td className="table__cell profile__status">
                    {profile.completed
                        ? <span className="profile__status--completed">Completed</span>
                        : <span className="profile__status--open">Open</span>
                    }
                </td>
                <td className="table__cell profile__title">{profile.fullName}</td>
                <td className="table__cell profile__pic">
                    <img src={profile.profilePic} alt="Profile Pic" />
                </td>
                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>

        )

    } else return null
}
export default Profile