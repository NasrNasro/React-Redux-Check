import { ADD, DELETE, DONE, EDIT } from "./types"

const initialState={
    tasks:[
        { id: 0, description: "Listen music", isDone: false },
        { id: 1, description: "Watch movie", isDone: false},
        { id: 2, description: "Read book", isDone: false}
    ]
}

const AfficheReducer=(state=initialState,action)=>{
    switch (action.type) { 
        
        case ADD:
            return {...state, tasks: [...state.tasks,  action.payload  ] }

        case DONE:
            return {...state, tasks: state.tasks.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el)}

        case DELETE:
            return {...state, tasks: state.tasks.filter(el => el.id !== action.payload)}

        case EDIT:
            return {...state, tasks: state.tasks.map(el=>el.id===action.id ? {...el, description: action.edited} : el)}

        default:
            return state
    }

}
export default AfficheReducer