import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}
export const couterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        incrementar: state => {
            state.value += 1
        },
        decrementar: state => {
            state.value -=1
        },
        dobrar: state => {
            state.value*=2
        },
        dividir: state => {
            state.value = (state.value % 2) == 0? state.value /2 : (state.value + 1 )/ 2
        },
        Incremento_com_outro: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const {incrementar, decrementar,dobrar,dividir, Incremento_com_outro} = couterSlice.actions;

export default couterSlice.reducer;