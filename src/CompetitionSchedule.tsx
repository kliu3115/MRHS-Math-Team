const CompetitionSchedule = () => {
    return (
        <div className = "home">
            <h2> Here's the competition schedule for 2024 - 2025! </h2>
            <p> If you see your name on the <a href = "/hcml-teams"> HCML teams</a> for that week, please report to room 220 after school on the day of the competition! </p>
            <table> 
                <tr>
                    <th> Date </th>
                    <th> Location </th> 
                </tr>
                <tr> 
                    <td> 9/17 </td>
                    <td> Marriotts Ridge </td> 
                </tr> 
                <tr> 
                    <td> 10/17 </td>
                    <td> Mt. Hebron </td> 
                </tr> 
                <tr> 
                    <td> 10/30 </td>
                    <td> AMC 10/12 A </td> 
                </tr>
            </table>
        </div>    
    )
}

export default CompetitionSchedule;