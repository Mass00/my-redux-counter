type SettingsReducerActionType = setEditACType | setMaxACType | setMinACType
export type SettingsReducerStateType = {
    isEdit: boolean
    min: number
    max: number
}
const initialSettingsReducerState = {
    isEdit: false,
    min: 0,
    max: 5
}
export const SettingsReducer = (state:SettingsReducerStateType = initialSettingsReducerState, action: SettingsReducerActionType):SettingsReducerStateType => {
    switch (action.type){
        case "SETEDIT": {
            return {...state,isEdit: action.payload.isEdit}
        }
        case "SET-MAX": {
            return {...state,max: action.payload.value}
        }
        case "SET-MIN": {
            return {...state, min: action.payload.value}
        }
        default: return state
    }
}
type setEditACType = ReturnType<typeof setEditAC>
export const setEditAC = (isEdit: boolean) => {
    return {type: "SETEDIT", payload: {isEdit}} as const
}
type setMaxACType = ReturnType<typeof setMaxAC>
export const setMaxAC = (value: number) => {
    return {type: "SET-MAX", payload: {value}} as const
}
type setMinACType = ReturnType<typeof setMinAC>
export const setMinAC = (value: number) => {
    return {type: "SET-MIN", payload: {value}} as const
}