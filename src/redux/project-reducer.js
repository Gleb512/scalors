import {createProject, deleteProjectFunc, updateProjectFunc} from "../utils/utils";

const DELETE = 'DELETE'
const UPDATE = 'UPDATE'
const LOADER = 'LOADER'

const projects = require('../data/project.json')
const users = require('../data/user.json')
const devices = require('../data/device.json')



let initialState = {
    projects: projects.map((p) => createProject(
        p,
        devices.filter(u => u.projectId === p.id),
        users.filter(u => u.projectId === p.id),
    )),
    loader: false
}




const projectsReducer = (state = initialState , action) => {
    switch (action.type) {
        case DELETE:
            return {
                ...state,
                projects: deleteProjectFunc(state.projects, action.id)
            };
        case UPDATE:
            return {
                ...state,
                projects: updateProjectFunc(state.projects, action.id, action.values)
            };
        case LOADER:
            return {
                ...state,
                loader: action.value
            }
        default:
            return state;
    }
}


export const deleteProjectAction = (id) => ({type: DELETE, id})
export const updateProjectAction = (id, values) => ({type: UPDATE, id, values})
export const loader = (value) => ({type: LOADER, value})


export const deleteProjectCurrentProject = (id) =>{
    return async (dispatch) => {
        try {
            await dispatch(deleteProjectAction(id))
        }catch (e) {
            if(e){
                console.log(e)
            }
        }
    }
}

export const updateProject = (id, values) =>{
    return async (dispatch) => {
        try {
            await dispatch(updateProjectAction(id, values))
        }catch (e) {
            if(e){
                console.log(e)
            }
        }
    }
}

export default projectsReducer;
