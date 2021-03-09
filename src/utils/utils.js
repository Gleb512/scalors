export function createProject(project, devices, users){
    return {...project, devices, users}
}

export function deleteProjectFunc(array, id){
    array[array.findIndex(arr => arr.id === id)].deleted = 1
    return array
}
export function updateProjectFunc(array, id, values){
    array[array.findIndex(arr => arr.id === id)].title = values.title
    array[array.findIndex(arr => arr.id === id)].beginDate = values.beginDate+'00:00:00.000Z'
    array[array.findIndex(arr => arr.id === id)].expirationDate = values.expirationDate+'00:00:00.000Z'
    array[array.findIndex(arr => arr.id === id)].users = values.users

    array[array.findIndex(arr => arr.id === id)].devices = values.devices

    return array
}