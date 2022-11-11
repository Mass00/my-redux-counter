
type CounterReducerActionType = incCounterACType | resCounterACType
const initialState = 0
export const CounterReducer = (state = initialState, action: CounterReducerActionType):number => {
    switch (action.type){
        case "INCREMENT": {
            return state = state + 1
        }
        case "RESET":
        {
            return state = action.payload.value ? action.payload.value : 0
        }
        default: return state;
    }
};
type incCounterACType = ReturnType<typeof incCounterAC>
export const incCounterAC = () => {
    return {type: "INCREMENT"} as const
}

type resCounterACType = ReturnType<typeof resCounterAC>
export const resCounterAC = (value?: number) => {
    return {type: "RESET", payload: {value}} as const
}
