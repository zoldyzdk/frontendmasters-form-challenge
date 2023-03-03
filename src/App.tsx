import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App w-screen h-screen">
        <div className=" teste">
          <img
            className="w-full h-[15rem]"
            src="/bg-main-mobile.png"
            alt="degrade image"
          />
          <img
            className="absolute top-8 right-4 z-10 w-[286.5px]"
            src="/bg-card-back.png"
            alt="back of a card"
          />
          <img
            className="z-20 absolute top-[121px] left-4 w-72 h-40"
            src="/bg-card-front.png"
            alt="front of the card"
          />
        </div>
        <div className="flex flex-col items-center m-28 gap-11">
            <div className=" border-2 border-solid w-80 h-11">
                NAME
            </div>
            <div className=" border-2 border-solid w-80 h-11">
                NUMBER
            </div>
            <div className=" border-2 border-solid w-80 h-11">
                DATE + CVC
            </div>
        </div>
      </div>
    </>
  );
}

export default App
