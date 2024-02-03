import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPizzaState{
    sliceCount:number;
    peppCount:number;
    reset:boolean;
    error:boolean;
    cost:number;
    baseprice: number;
    pepp: number;
    slice:number;
}

const initialState: IPizzaState = {
    sliceCount: 8,
    peppCount: 56,
    reset: false,
    error:false,
    cost:0,
    baseprice:10,
    pepp: 0.5,
    slice: 1.5,
}

export const pizza = createSlice({
    name:"pizza",
    initialState,
    reducers:{
        removePizza:(state)=>{
            state.sliceCount--     
            state.peppCount-= 7                   
        },
        removePepp:(state)=>{
            state.peppCount--                        
        },
        resetPizza:()=>{                          
             return  initialState;
            }
        ,
        calculateTotal:(state)=>{
            (state.sliceCount==8) ?
             state.cost= (state.baseprice ) + (state.pepp * state.peppCount) :
             state.cost= (state.slice * state.sliceCount) + (state.pepp * state.peppCount)
        }
    }
})

export  const {removePizza , removePepp ,resetPizza, calculateTotal}=pizza.actions
export default  pizza.reducer;