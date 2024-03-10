import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { toadd,tosub } from './slices/counterSlice'

function App() {

  // get state from the store
  let counter=useSelector(state=>state.counter)

  // dispatch ke liye
  let dispatch=useDispatch();

  const func=()=>{
    let actionObj=toadd()
    dispatch(actionObj);
  }
  const subtract=()=>{
    let actionObj=tosub()
    dispatch(actionObj);
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter.initialvalue}</h2>
      <button onClick={func}>Increment</button>
      <button onClick={subtract}>Decrement</button>
    </div>
  );
}

export default App;