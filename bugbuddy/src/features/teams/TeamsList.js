import { useGetTeamsQuery } from "./teamsApiSlice"
import Team from './Team'

const TeamsList = () => {

    const {
        data: teams,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTeamsQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = teams

        const tableContent = ids?.length
            ? ids.map(teamId => <Team key={teamId} teamId={teamId} />)
            : null

        content = (
            <table className="table table--teams">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th team__teamname">Status</th>
                        <th scope="col" className="table__th team__teamname">Teamname</th>
                        {/* <th scope="col" className="table__th team__edit">Teamname</th> */}
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
export default TeamsList