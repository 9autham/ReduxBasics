import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'

export const store=configureStore({
    // Root Reducer
    // Inside that Child reducers
    reducer:{
        // keyword to identify:SliceFunctionality
        counter:counterReducer
    }
})

/*
Create and Accessing the state of redux by react components

Install @redux/toolkit react-redux

Create a redux store in src ie store.js
    configure-store @redux/toolkit


Provide store to the root component {index.js}
    import {store} form './store'
    import {Provider} form 'react-redux'
    Wrap App Component within the provoider Compnent
    <Provider store={store}>
    
    
    </Provider>

Create State: Slice
    You can make as many as slice you want and gather them in the store
    Create a folder name slices and sliceName.js {todoSlice.js}
    Slice has 3 elements/properties
        name:"nameofthetask"
        initialState:{}
        reducers:{}
    export the reducers ie export default todoSlice.reducer;

Add State {Slices} to the Store
    Now all the exported Slices are imported here ie import todoReducer from './slices/todoSlice'
    The Configure store has one property namely reducer
    export const store=configureStore({
        reducers:{
            todos:todoReducer
        }
    })

A component can access state(slice) from store using "useSlector" hook of react-redux
    import {useSelector} from 'react-redux'
    let todo=useSlector(state=>state.todo) // With this key todo->todoReducer is called
    now todo will have the state, which can be used to display the state

Modifying the Store - {Modifying state of redux store}
The reducer functions can only modify state of redux state

Create Reducer functions
In Slice we have reducer property which is used to modify the state
    reducer:{
        addtodo:(state,action)=>{
            // action.payload is the arguments ie data
            state.push(action.payload)
        }
        deletodo:()=>{

        }
    }
    Now the addtodo and deletodo are the reducer function

Create "action creater functions" and export the reducer functions
    export const {toadd,tosub} =counterSlice.actions (or)
    export const {addTodo,deletodo}=todoSlice.actions


React Component can call the action creator function to modify the current state
    import {addTodo, delTodo} from './slices/todoSlice'
    Where every you want to use the state you can import the action functions

    let actionObj=addTodo(10)
    console.log(actionObj)
    >terminal [type:'todos/addTodo',Payload:'10']

Dispatch action obj to store using "useDispatch" hook of react-redux
    Where ever you want to change the state, You should dispatch the above actionObj
    import {useDispatch} from 'react-reedux'
    let dispatch=useDispatch() // Declare Only one in the file
    Combined Code:
        let actionObj=addTodo(10) // Use this where-ever the state has to be changed
        console.log(actionObj)
        >terminal [type:'todos/addTodo',Payload:'10']
        dispatch(actionObj);

Link :"https://drive.google.com/file/d/1OntUG4VvklT4cHxiFUA1y-fx_JQHlygS/view"

ThankYou!!
        
 */