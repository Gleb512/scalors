import React from "react";
import {Field, FieldArray} from "redux-form";
import Button from "@material-ui/core/Button";

const UsersRepeater = (props) => {
    const renderField = ({ input, label, type, val, placeholder }) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} type={type} placeholder={placeholder}/>
            </div>
        </div>
    )


    const renderUsers = ({ fields }) => {
        console.log('Users',fields.getAll())
        return (
            <div>
                {/*Users Fields List */}
                <ul>
                    <li>
                        <Button type="button" onClick={() => fields.push({appuserId: Math.random(),
                            projectId: props.project.id})}>Add User</Button>
                    </li>
                    {fields.map((user, index) =>
                        <li className='renderAlignItem' key={index}>
                            <Button
                                type="button"
                                title="Remove User"
                                onClick={() => fields.remove(index)}>Remove User</Button>
                            <h4>User #{index + 1}</h4>
                            <Field
                                name={`users[${index}].firstName`}
                                type="text"
                                component={renderField}
                                label="First Name"
                            />
                            <Field
                                name={`users[${index}].lastName`}
                                type="text"
                                component={renderField}
                                label="Last Name"
                            />
                            <Field
                                name={`users[${index}].appuserId`}
                                type="hidden"
                                component={renderField}
                            />
                            <Field
                                name={`users[${index}].projectId`}
                                type="hidden"
                                component={renderField}
                            />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
    return <FieldArray name="users" component={renderUsers}/>
}

export default UsersRepeater