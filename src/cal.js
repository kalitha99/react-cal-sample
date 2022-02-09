import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (action.payload === '0' && state.currentOp === '0') {
        return state
      }
      if (state.currentOp == null && action.payload === '.') {
        return state
      }
      if (action.payload === '.' && state.currentOp.includes('.')) {
        return state
      }
      return {
        ...state,
        currentOp: `${state.currentOp || ''}${action.payload}`,

      }

    case 'DELETE_DIGIT':
      if(state.currentOp==null){
        return{ 
          ...state,
          currentOp: state.previousOp,
          previousOp:null,
          operation:null
        }
       
      }
      return {
        ...state,
        currentOp: state.currentOp.slice(0, -1)
      }


    case 'CHOSE_OPERATION':
      if (state.previousOp == null && state.currentOp == null) {
        return state
      }

      if (state.currentOp == null) {
        return state
      }

      if (state.previousOp == null) {
        return {
          ...state,
          operation: action.operation,
          previousOp: state.currentOp,
          currentOp: null
        }
      }

      return {
        ...state,
        previousOp: math(state),
        operation: action.operation,
        currentOp: null

      }


    case 'EQUAL':
      if (state.operation == null || state.previousOp == null || state.currentOp == null) {
        return state
      }
      return {
        ...state,
        previousOp: `${state.previousOp}${state.operation}${state.currentOp}`,
        operation: action.operation,
        currentOp: math(state)
      }

    case 'CLEAR':
      return {}

    default:
      return state
  }
}

function math(params) {
  const pre = parseFloat(params.previousOp)
  const crnt = parseFloat(params.currentOp)
  if (isNaN(pre) || isNaN(crnt)) {
    return ""
  }
  let result = ''
  switch (params.operation) {
    case '+':

      result = pre + crnt
      break;

    case '-':

      result = pre - crnt
      break;

    case '*':

      result = pre * crnt
      break;

    case '/':

      result = pre / crnt
      break;

    default:
      return ''
  }

  return result

}




function Cal() {
  const [state, dispatch] = useReducer(reducer, {})
  return (

    <div>

      <div className="output">


        <div className="previous">{state.previousOp} {state.operation}</div>
        <div className="curent">{state.currentOp}</div>

      </div>
      <div >
        <button className=" wide span-two btn btn-info" onClick={() => dispatch({ type: 'CLEAR' })}>AC</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'DELETE_DIGIT' })}>DEL</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'CHOSE_OPERATION', operation: '/' })}>/</button>
        <br />
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '1' })}>1</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '2' })}>2</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '3' })}>3</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'CHOSE_OPERATION', operation: '*' })}>*</button>
        <br />
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '4' })}>4</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '5' })}>5</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '6' })}>6</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'CHOSE_OPERATION', operation: '+' })}>+</button>
        <br />
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '7' })}>7</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '8' })}>8</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '9' })}>9</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'CHOSE_OPERATION', operation: '-' })}>-</button>
        <br />
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '.' })}>.</button>
        <button className=' btn btn-info' onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '0' })}>0</button>
        <button className="wide span-two btn btn-success" onClick={() => dispatch({ type: 'EQUAL' })}>=</button>
      </div>
    </div>



  )
}

export default Cal;
