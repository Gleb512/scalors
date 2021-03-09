import React from "react";
import {connect} from "react-redux";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ProjectItem from "./projectItem";
import {deleteProjectCurrentProject, updateProject} from "../../redux/project-reducer";

class ProjectsList extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.projects ?
                    <div>{ this.props.projects.length > 0 ?
                    <TableContainer>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell align="left">Devices</TableCell>
                                    <TableCell align="left">Users</TableCell>
                                    <TableCell align="left">beginDate</TableCell>
                                    <TableCell align="left">expirationDate</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.projects.map(p=><ProjectItem deleteItem={this.props.deleteProjectCurrentProject}
                                                                         updateProject={this.props.updateProject}
                                                                         project={p} key={p.id*2} />)}
                            </TableBody>
                        </Table>
                    </TableContainer> : <h1>No Projects has been found</h1>
                }</div> : <h1>Loading...</h1>}
            </div>
        )
    }
}

let mapStateToProps = state =>{
    return{
        projects: state.projects.projects.filter(pr=>pr.deleted === 0)
    }
}

const ProjectsListContainer = connect(mapStateToProps, {deleteProjectCurrentProject, updateProject})
(ProjectsList);


export default ProjectsListContainer