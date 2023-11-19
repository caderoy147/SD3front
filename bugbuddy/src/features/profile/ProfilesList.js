import { useGetProfilesQuery } from "./profilesApiSlice"
import Profile from './Profile'
import '../../styles/tempProfile.css'

const ProfilesList = () => {

  

    const {
        data: profiles,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProfilesQuery()

    
    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = profiles

        const tableContent = ids?.length
            ? ids.map(profileId => <Profile key={profileId} profileId={profileId} />)
            : null

        content = (
            <table className="table table--profiles">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th profile__profilename">fullName</th>
                        <th scope="col" className="table__th profile__profilename">Profilename</th>
                        {/* <th scope="col" className="table__th profile__edit">Profilename</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default ProfilesList