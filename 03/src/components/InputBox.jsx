import React from "react";
import './InputBox.css'
function InputBox({
    label,
    className = "",
    amount,
    amountDisable=false, 
    currencyDisable=false, 
    amountOnChange, 
    currencyOptions, 
    currencyOnChange, 
    selectCurrency="pkr"}) 
    {
    return (
        <div className=" inputcard gap-2 mx-auto max-w-6xl px-4 grid-cols-2">
            <div className="flex min-w-0 flex-col gap-2">
                <label  className="text-white ml-2 mt-2 inline-block">
                    {label}
                </label>
                <input
                    value={amount}
                    className="w-63 bg-transparent"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    onChange={(e)=>(amountOnChange && amountOnChange(Number(e.target.value)))}
                /></div>
                <div className="flex flex-col items-center gap-2">
                <p className="text-white/40 ">Currency Type</p>
                 
                <select
                    className=" rounded-lg text-black bg-gray-200 cursor-pointer"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=> currencyOnChange && currencyOnChange(e.target.value) }
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}  
                
                </select>
                </div>
            </div>

    );
}

export default InputBox;
