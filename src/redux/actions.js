import { ADD, DELETE, DONE, EDIT } from "./types"

export const add=(newtask)=>{
return {
    type:ADD,
    payload:newtask
}
}

export const donetask=(id)=>{
    return {
        type:DONE,
        payload:id
    }
}

export const editask=(id,edited)=>{
    return {
        type:EDIT,
        id:id,
        edited:edited
    }
}

export const deletetask=(id)=>{
    return {
        type:DELETE,
        payload:id
    }
}