import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





function reducer(state,{type,payload}){

}
function Cal() {
  const [{currentOp,previousOp,operation},dispatch] = useReducer(reducer)
  return (

      <div>

        <div className="output">


          <div className="previous"></div>
          <div className="curent"></div>

        </div>
        <div >
          <button className=" wide span-two btn btn-info">AC</button>
          <button className=' btn btn-info' >DEL</button>
          <button className=' btn btn-info'>/</button>
          <br />
          <button className=' btn btn-info'>1</button>
          <button className=' btn btn-info'>2</button>
          <button className=' btn btn-info'>3</button>
          <button className=' btn btn-info'>*</button>
          <br />
          <button className=' btn btn-info'>4</button>
          <button className=' btn btn-info'>5</button>
          <button className=' btn btn-info'>6</button>
          <button className=' btn btn-info'>+</button>
          <br />
          <button className=' btn btn-info'>7</button>
          <button className=' btn btn-info'>8</button>
          <button className=' btn btn-info'>9</button>
          <button className=' btn btn-info'>-</button>
          <br />
          <button className=' btn btn-info'>.</button>
          <button className=' btn btn-info'>0</button>
          <button className="wide span-two btn btn-info">=</button>
        </div>
      </div>



  )
}

export default Cal;
