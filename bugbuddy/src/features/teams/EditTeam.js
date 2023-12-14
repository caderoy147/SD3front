import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTeamById } from './teamsApiSlice'
import EditTeamForm from './EditTeamForm'

const EditTeam = () => {
    const { id } = useParams()

    const team = useSelector(state => selectTeamById(state, id))

    const content = team ? <EditTeamForm team={team} /> : <p>Loading...</p>

    return content
}
export default EditTeam