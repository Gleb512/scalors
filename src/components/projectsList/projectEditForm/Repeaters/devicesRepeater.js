import React from "react";
import {Field, FieldArray} from "redux-form";
import Button from "@material-ui/core/Button";

const DevicesRepeater = (props) => {
    const renderField = ({ input, label, type, val, placeholder }) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} type={type} placeholder={placeholder}/>
            </div>
        </div>
    )


    const renderUsers = ({ fields }) => {
        console.log('Devices',fields.getAll())
        return (
            <div className=''>
                {/*Devices Fields List */}
                <ul>
                    <li>
                        <Button type="button" onClick={() => fields.push({deviceId: Math.random(),
                            projectId: props.project.id, serialNumber: ''})}>Add Devise</Button>
                    </li>
                    {fields.map((device, index) =>
                        <li key={index}>
                            <Button
                                type="button"
                                title="Remove User"
                                onClick={() => fields.remove(index)}>Remove Devise</Button>
                            <h4>Device #{index + 1}</h4>
                            <Field
                                name={`devices[${index}].serialNumber`}
                                type="text"
                                component={renderField}
                                label="Serial Number"
                            />
                            <Field
                                name={`devices[${index}].deviceId`}
                                type="hidden"
                                component={renderField}
                            />
                            <Field
                                name={`devices[${index}].projectId`}
                                type="hidden"
                                component={renderField}
                            />
                        </li>
                    )}
                </ul>

            </div>


        )
    }

    return <FieldArray name="devices" component={renderUsers}/>
}

export default DevicesRepeater