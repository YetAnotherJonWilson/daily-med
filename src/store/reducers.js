import C from '../constants'

export const upload_mini = (state=10, action) => {
    if(action.type === C.upload_mini_meditation) {
        return action.payload
    } else {
        return state
    }
}