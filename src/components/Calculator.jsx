import React, {useState, useEffect} from "react"

function Calculator(){
  const[expression, setExpression] = useState("");
  const[result, setResult] = useState("");

  const operators = ['/', '*', '+', '-', '.', '%'];

  const updateCalc = value => {
    if(
      operators.includes(value) && expression === '' || 
      operators.includes(value) && operators.includes(expression.slice(-1)
      )
    ){
      return;
    }
    setExpression(prev => prev + value)

    if(!operators.includes(value)){
      setResult(eval(expression + value).toString());
    }
  }

  const calculate = () =>{
    setExpression(eval(expression).toString());
  }
  
  const clear = () => {
    setExpression("");
    setResult("");
  }

  const deleteLastValue = () => {
    if (expression === ''){
      setResult("");
      return;
    }
    setExpression(prev => prev.slice(0, -1))
    setResult(eval(expression.slice(0, -1)).toString())
  }
  return(
    <div className="calculator">
        <div className="calculator-screen">
          {result ? <span>({result})</span> : ''}
          &nbsp;
          {expression || "0"}
        </div>
        <div className="button-container">
          <div className="calculator-row">
            <div className="clear" onClick={clear}>C</div>
            <div className="symbol"  onClick ={() => {updateCalc('/')}}>÷</div>
            <div className="symbol" onClick ={() => {updateCalc('*')}}>X</div>
            <div className="backspace" onClick ={deleteLastValue}>&#9224;</div>
          </div>

          <div className="calculator-row">
            <div className="numbers" onClick ={() => {updateCalc('7')}}>7</div>
            <div className="numbers" onClick ={() => {updateCalc('8')}}>8</div>
            <div className="numbers" onClick ={() => {updateCalc('9')}}>9</div>
            <div className="symbol"  onClick ={() => {updateCalc('-')}}>-</div>
          </div>

          <div className="calculator-row">
            <div  className="numbers" onClick ={() => {updateCalc('4')}}>4</div>
            <div className="numbers" onClick ={() => {updateCalc('5')}}>5</div>
            <div className="numbers" onClick ={() => {updateCalc('6')}}>6</div>
            <div className="symbol"  onClick ={() => {updateCalc('+')}}>+</div>
          </div>

          <div className="calculator-row-bottom">
            <div className="bottom-row-column">
              <div className="bottom-elements"  onClick ={() => {updateCalc('1')}}>1</div>
              <div className="bottom-elements" onClick ={() => {updateCalc('.')}}>.</div>
            </div>
            <div className="bottom-row-column">
              <div className="bottom-elements" onClick ={() => {updateCalc('2')}}>2</div>
              <div className="bottom-elements" onClick ={() => {updateCalc('0')}}>0</div>
            </div>
            <div className="bottom-row-column">
              <div className="bottom-elements" onClick ={() => {updateCalc('3')}}>3</div>
              <div className="percent" onClick ={() => {updateCalc('/100*')}}>%</div>
            </div>
            <div className="bottom-row-column">
               <div className= "equals" onClick={calculate}>
                =
               </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Calculator;