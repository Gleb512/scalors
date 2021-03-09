import React, {useState} from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import ProjectEditForm from "./projectEditForm/projectEditForm";

class ProjectItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }
    submit = values => {
        this.props.updateProject(this.props.project.id,values)
        this.setState({edit: !this.state.edit })
    };
    getInitialValues() {
        return {
            ...this.props.project
        };
    }

    render() {
        return (
            <>
                {!this.state.edit ? <TableRow>
                    <TableCell component="th" scope="row">
                        {this.props.project.title ? this.props.project.title : 'Empty'}
                    </TableCell>
                    <TableCell align="left">
                    {this.props.project.devices.length > 0 ? this.props.project.devices.map(d=><p
                        key={d.serialNumber}>{d.serialNumber}</p>) : 'Empty'}
                    </TableCell>
                    <TableCell align="left">
                    {this.props.project.users.length > 0 ? this.props.project.users.map(u=><p
                        key={u.appuserId}>{u.firstName} {u.lastName}</p>) : 'Empty'}
                    </TableCell>
                    <TableCell align="left">
                    {this.props.project.beginDate ? this.props.project.beginDate : 'Empty'}
                    </TableCell>
                    <TableCell align="left">
                    {this.props.project.expirationDate ? this.props.project.expirationDate : 'Empty'}
                    </TableCell>
                    <TableCell align="left">
                    <Button color="primary" onClick={() => this.setState({edit: !this.state.edit })}>
                    Edit
                    </Button>
                    </TableCell>
                    <TableCell align="left">
                    <Button  color="secondary" onClick={() => this.props.deleteItem(this.props.project.id)}>
                    Delete
                    </Button>
                    </TableCell>
                </TableRow> : <ProjectEditForm project={this.props.project} onSubmit={this.submit} />}
            </>
        )
    }
}

export default ProjectItem