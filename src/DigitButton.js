
import { ACTIONS } from './App'

function DigitButton({dispatch , digit}) {
  return (
    <button className="btn btn-default text-center" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
        {digit}
    </button>
  )
}

export default DigitButton