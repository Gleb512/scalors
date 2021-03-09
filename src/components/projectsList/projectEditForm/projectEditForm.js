import React, {useEffect, useState} from "react";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import {Field, reduxForm} from "redux-form";
import { FieldArray } from 'redux-form'
import UsersRepeater from "./Repeaters/usersRepeater";
import DevicesRepeater from "./Repeaters/devicesRepeater";


const ProjectEditFormLayout = (props) => {
    const {handleSubmit} = (props);
    return (
        <TableRow>
            <TableCell className='form-row'>
            <form className="form" fields={props.project.users} onSubmit={handleSubmit}>
                <div className="renderAlign">
                    <UsersRepeater project={props.project} />
                    <DevicesRepeater project={props.project} />
                </div>

                <Field
                    name="title"
                    component='input'
                    type="text"
                    placeholder="Title"

                />
                <Field
                    name="id"
                    component="input"
                    type="hidden"
                />


                <Field
                    name="beginDate"
                    component="input"
                    type="date"
                    placeholder="Begin Date"
                />


                <Field
                    name="expirationDate"
                    component="input"
                    type="date"
                    placeholder="Expiration Date"
                    // value={props.project.expirationDate}
                />

                <Button type="submit" label="submit">
                    Update
                </Button>

            </form>
            </TableCell>
        </TableRow>
    )
}

const ProjectEditForm = (props) => {
    const project = props.project
    const cutTime = (time) => {
        if(time !== null){
            return time.replace('T00:00:00.000Z', '')
        }else{
            return time
        }
    }

    const ProjectEditForm = reduxForm ({
        form: 'checkoutForm',
        enableReinitialize : true,
        initialValues: {
            users: project.users.map(u=>u),
            devices: project.devices.map(d=>d),
            title: project.title,
            beginDate: cutTime(project.beginDate),
            expirationDate: cutTime(project.expirationDate)
        }}) (ProjectEditFormLayout)

    return (
        <ProjectEditForm {...props} />
    )

};
export default ProjectEditForm