import C from '../constants'

export const upload_mini = (state=null, action) =>
    (action.type === C.UPLOAD_MINI_MEDITATION) ?
        action.payload :
        state
