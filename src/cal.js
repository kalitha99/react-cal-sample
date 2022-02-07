import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  CLEAR: 'clear',
  CHOSE_OPERATION: 'chose-operation',
  EQUAL: 'equal'


}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      return{ 
        ...state,
        currentOp:`${state.currentOp}${action.payload}`,
        
  }
    case ACTIONS.DELETE_DIGIT:
      return state - 1

    case ACTIONS.CHOSE_OPERATION:
      return { 
        ...state,
        currentOp:"",
        previousOp:`${state.currentOp}${action.payload}`
        
  }

    case ACTIONS.EQUAL:
      return {}

    case ACTIONS.CLEAR:
      return {}

    default:
      return state
  }
}
const initialState ={
  previousOp:0,
  operation:'',
  currentOp:''
}
function Cal() {
  const [{previousOp,currentOp,operation}, dispatch] = useReducer(reducer, initialState)
  return (

    <div>

      <div className="output">


        <div className="previous">{previousOp} {operation}</div>
        <div className="curent">{currentOp}</div>

      </div>
      <div >
        <button className=" wide span-two btn btn-info">AC</button>
        <button className=' btn btn-info' >DEL</button>
        <button className=' btn btn-info'>/</button>
        <br />
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:1})}>1</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:2})}>2</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:3})}>3</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.CHOSE_OPERATION, payload:'*'})}>*</button>
        <br />
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:4})}>4</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:5})}>5</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:6})}>6</button>
        <button className=' btn btn-info'>+</button>
        <br />
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:7})}>7</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:8})}>8</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:9})}>9</button>
        <button className=' btn btn-info'>-</button>
        <br />
        <button className=' btn btn-info'>.</button>
        <button className=' btn btn-info' onClick={()=> dispatch({type:ACTIONS.ADD_DIGIT, payload:0})}>0</button>
        <button className="wide span-two btn btn-info">=</button>
      </div>
    </div>



  )
}

export default Cal;
