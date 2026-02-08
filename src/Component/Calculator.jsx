import { useEffect, useRef, useState } from "react";
import style from "../Styles/calculator.module.css"
const Calculator = () => {

    const [input, setInput] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    })

    function executeExpression() {
        const expression = eval(input);
        setInput(expression == 0 ? '' : expression);
    }

    return (
        <div className={style.calculatorCont}>
            <div className={style.clc}>
                <div className={style.displayScreen}>
                    <input type="text" value={input} ref={inputRef}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                executeExpression();
                            }
                        }}
                        inputMode="numeric" placeholder="0"
                    />
                </div>
                <div className={style.buttonsCont} >
                    <div className={style.column}>
                        <div className={`${style.row} ${style.bt1}`} onClick={() => setInput(i => i + '%')} >%</div>
                        <div className={`${style.row} ${style.bt1} ${style.disable}`} onClick={() => setInput(i => i + '^')} >^</div>
                        <div className={`${style.row} ${style.bt1}`} onClick={() => setInput('')}>CE</div>
                        <div className={`${style.row} ${style.btBlack}`} onClick={
                            () => setInput((input) => input.slice(0, input.length - 1))
                        } >C</div>
                    </div>
                    <div className={style.column}>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '7')}>7</div>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '8')}>8</div>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '9')}>9</div>
                        <div className={`${style.row} ${style.btRed}`} onClick={() => setInput(i => i + '-')}>⚊</div>
                    </div>
                    <div className={style.column}>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '4')}>4</div>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '5')}>5</div>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '6')}>6</div>
                        <div className={`${style.row} ${style.btBlue}`} onClick={() => setInput(i => i + '/')}>/</div>
                    </div>
                    <div className={style.column}>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '1')}>1</div>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '2')}>2</div>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '3')}>3</div>
                        <div className={`${style.row} ${style.btYellow}`} onClick={() => setInput(i => i + '*')}>X</div>
                    </div>
                    <div className={style.column}>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '.')}>.</div>
                        <div className={`${style.row} ${style.bt2}`} onClick={() => setInput(i => i + '0')}>0</div>
                        <div className={`${style.row} ${style.bt1}`} onClick={() => executeExpression()} >=</div>
                        <div className={`${style.row} ${style.btGreen}`} onClick={() => setInput(i => i + '+')}>+</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Calculator;