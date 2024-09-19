export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page." />
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" type="number" defaultValue={100} />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option value="assignments">ASSIGNMENTS</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-grade-display">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-grade-display">
                                <option value="percentage">Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type">
                                <option value="online">Online</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">Online Entry Options</td>
                        <td>
                            <label><input type="checkbox" /> Text Entry</label><br />
                            <label><input type="checkbox" /> Website URL</label><br />
                            <label><input type="checkbox" /> Media Recordings</label><br />
                            <label><input type="checkbox" /> Student Annotation</label><br />
                            <label><input type="checkbox" /> File Uploads</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign-to">Assign Assign to</label>
                        </td>
                        <td>
                            <select id="wd-assign-to">
                                <option value="everyone">Everyone</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-due-date">Due</label>
                        </td>
                        <td>
                            <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">Available from</td>
                        <td>
                            <input type="date" defaultValue="2024-05-06" /> Until
                            <input type="date" defaultValue="2024-05-20" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}
