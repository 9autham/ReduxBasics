import React from 'react'
import Button from 'react-bootstrap/Button';
import { toadd,tosub} from '../slices/counterSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    let dispatch=useDispatch();
    const counterinc=()=>{
        let actionObj=toadd()
        dispatch(actionObj);
    }
    const counterdec=()=>{
        let actionObj=tosub()
        dispatch(actionObj);
    }
  return (
    <div className='container'>
        <h1>You are in Home Section</h1>
        <Button variant="outline-success" onClick={counterinc}>Primary</Button>{' '}
        <Button variant="outline-danger" onClick={counterdec}>Primary</Button>{' '}
    </div>
  )
}

export default Home;