import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
const [to,setTo] = useState("inr")
const [from, setFrom] = useState("usd")
const [amount, setAmount]=useState(0)
const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo= useCurrencyInfo(from)

const options = Object.keys(currencyInfo)
const swap = ()=>{
  setFrom(to)
  setTo(from)
  setAmount(setConvertedAmount)
  setConvertedAmount(setAmount)
}
const covert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
}
  return (<>
  
                <div className= " w-full max-w-md mx-auto justify-center items-center card ">
                  <h1>Currency Converter</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            covert()
                           }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={Math.floor(amount)}
                                currencyOptions={options}
                                selectCurrency={from}
                                amountOnChange={
                                    (newAmount)=>{setAmount(newAmount)}}
                                currencyOnChange = {
                                    (newCurrency)=>{
                                  setFrom(newCurrency)
                                }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-700 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={Math.floor(convertedAmount)}
                                currencyOptions={options}
                                selectCurrency={to}
                                currencyOnChange = {(newCurrency)=>{
                                  setTo(newCurrency)}}                                
                                amountDisable
                            />
                            
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>

                    </form>
                </div>

    </>
  )
}

export default App
