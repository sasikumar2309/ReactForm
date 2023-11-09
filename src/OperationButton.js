import {ACTIONS}from "./Calc"
export default function OperationButton({ dispatch,operation}){
    return (
    <button onClick={()=>dispatch({type:ACTIONS.CHOSSE_OPERATION, payload:{operation}})}>{operation}</button>
)
}