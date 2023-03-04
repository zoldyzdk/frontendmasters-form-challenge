import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App w-screen h-screen tracking-[0.150rem] text-[0.75rem]">
        <div className=" teste">
          <img
            className="w-full h-60"
            src="/bg-main-mobile.png"
            alt="degrade image"
          />
          <img
            className="absolute top-8 right-4 z-10 max-w-[286px]"
            src="/bg-card-back.png"
            alt="back of a card"
          />
          <img
            className="z-20 absolute top-[121px] left-4 max-w-[286px] "
            src="/bg-card-front.png"
            alt="front of the card"
          />
        </div>
        <form className="flex flex-col items-center m-28 gap-11">
            {/*//todo COLOCAR FORM-GROUP PARA CADA GRUPO DE INPUTS*/}
            <label className="text-dark-violet">
                CARDHOLDER NAME
                <input
                    name="name"
                    placeholder="e.g. Jane Appleseed"
                    className=" border-2 border-solid w-80 h-11 rounded-lg text-lg pl-3"/>
            </label>
            {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
            <label className="text-dark-violet">
                CARD NUMBER
                <input
                    name="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    className=" border-2 border-solid w-80 h-11 rounded-lg text-lg pl-3"/>
            </label>
            {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
            <div className="flex gap-2.5">
                <label className="text-dark-violet">
                    EXP. DATE (MM/YY)
                    <div className="flex gap-[11px]">
                        <input
                            name="month"
                            placeholder="MM"
                            className=" border-2 border-solid w-[4.5rem] h-11 rounded-lg text-lg pl-3" />
                        {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
                        <input
                            name="year"
                            placeholder="YY"
                            className=" border-2 border-solid w-[4.5rem] h-11 rounded-lg text-lg pl-3" />
                    </div>
                </label>
                <label>
                    CVC
                    <input
                        name="cvc"
                        placeholder="e.g. 123"
                        className=" border-2 border-solid w-[10.25rem] h-11 rounded-lg text-lg pl-3" />
                </label>
            </div>
            <div className="pb-8">
                <button className=" text-white bg-dark-violet w-80 h-11 rounded-lg" type="submit">
                    Confirm
                </button>
            </div>
        </form>
      </div>
    </>
  );
}

export default App
