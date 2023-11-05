import { useGetBugsQuery } from "../../features/bugs/bugsApiSlice"
import Bug from "./QAinsideBugStatusCall"

const QAinsideBugStatusList = () => {
    const {
        data: bugs,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetBugsQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = bugs

        const tableContent = ids?.length
            ? ids.map(bugId => <Bug key={bugId} bugId={bugId} />)
            : null

        content = (
            <table>
                <thead>
                    <tr>
                        <th scope="col" className="table__th bug__title">Bug Name</th>
                        <th scope="col" className="table__th bug__created">Date Assigned</th>
                        <th scope="col" className="table__th bug__updated">Deadline</th>
                        <th scope="col" className="table__th bug__status">Status</th>
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
export default QAinsideBugStatusList