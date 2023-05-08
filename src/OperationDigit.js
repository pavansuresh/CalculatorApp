
import { ACTIONS } from './App'

function OperationButton({dispatch , operation}) {
  return (
    <button className="btn btn-default text-center" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
        {operation}
    </button>
  )
}

export default OperationButton