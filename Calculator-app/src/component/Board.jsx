import React, { useState } from 'react';
import Button from './Button';

export default function Board() {
    const [value, setValue] = useState('');

    const handleClick = (number) => {
        setValue(value + number);
    };

    const handleClear = () => {
        setValue("")
    }

    const handleEval = () => {
        try {
            setValue(eval(value))
        }
        catch (error) {
            setValue("Error")
        }
    }

    const handleUndo = () => {
        setValue(value.slice(0, -1))
    }

    return (
        <div className='container'>
            <div className="calculator">
                <input type='text' className='display' value={value} readOnly />

                <div className='key'>

                    <Button number={"+"} onClick={() => handleClick("+")} className="operator-btn btn" />
                    <Button number={7} onClick={() => handleClick(7)} className="btn" />
                    <Button number={8} onClick={() => handleClick(8)} className="btn" />
                    <Button number={9} onClick={() => handleClick(9)} className="btn" />
                </div>

                <div className='key'>
                    <Button number={"-"} onClick={() => handleClick("-")} className="operator-btn btn" />
                    <Button number={4} onClick={() => handleClick(4)} className="btn" />
                    <Button number={5} onClick={() => handleClick(5)} className="btn" />
                    <Button number={6} onClick={() => handleClick(6)} className="btn" />
                </div>

                <div className='key'>
                    <Button number={"*"} onClick={() => handleClick("*")} className="operator-btn btn" />
                    <Button number={1} onClick={() => handleClick(1)} className="btn" />
                    <Button number={2} onClick={() => handleClick(2)} className="btn" />
                    <Button number={3} onClick={() => handleClick(3)} className="btn" />
                </div>

                <div className='key'>
                    <Button number={"/"} onClick={() => handleClick("/")} className="operator-btn btn" />
                    <Button number={0} onClick={() => handleClick(0)} className="btn" />
                    <Button number={"."} onClick={() => handleClick(".")} className="btn" />
                    <Button number={"="} onClick={handleEval} className="btn" />
                </div>

                <div className='key'>
                    <Button number={"C"} onClick={handleClear} className="operator-btn btn" />
                    <Button number={"CE"} onClick={handleUndo} className="btn" />
                </div>

            </div>
        </div>
    );
}
