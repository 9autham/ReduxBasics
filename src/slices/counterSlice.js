import {createSlice} from '@reduxjs/toolkit'
export const counterSlice=createSlice({
    name:"counter",
    initialState:{initialvalue:0},
    reducers:{
        toadd:(state,action)=>{
            // State is the State 
            // Action is the payload which is the arguments for changing the state
            state.initialvalue+=1;
        },
        tosub:(state,action)=>{
            state.initialvalue-=1;
        }
    }
})
export const {toadd,tosub} =counterSlice.actions
// Export the counterSlice.reduce 
export default counterSlice.reducer