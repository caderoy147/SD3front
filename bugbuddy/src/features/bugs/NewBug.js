import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewBugForm from './NewBugForm'

const NewBug = () => {
    const users = useSelector(selectAllUsers)

    if (!users?.length) return <p>Not Currently Available</p>

    const content = <NewBugForm users={users} />
 

    return content
}
export default NewBug