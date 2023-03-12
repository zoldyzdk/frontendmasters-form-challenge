import {useState, useEffect} from 'react'
import { InputMask } from "primereact/inputmask";
import './App.css'
import {Nullable} from "primereact/ts-helpers";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [name, setName] = useState('Jane Appleseed');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');

  //Func to identify the actual size of the screen
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  interface formFields {
    name: string;
    cardNumber: number;
    month: number;
    year: number;
    cvc: number
  }
  // const handleOnChange = (value: string, id: string) => {
  //
  //
  //
  //     if (value == '') {
  //       setMonth('00')
  //       setYear('00')
  //       setCvc('000')
  //       console.log('segundo if')
  //       return;
  //     }
  //
  //     if (value == '' && value.length == 1) {
  //       setName('Jane Appleseed')
  //       setCardNumber('0000 0000 0000 0000')
  //       console.log('passou aqui')
  //       return
  //     }
  //
  //     if (id == 'name') {
  //       setName(name);
  //     } else if (id == 'number') {
  //       const mask = value
  //           .replace(/\D/g, '')
  //           .replace(/^(\d{4})(\d{0,4})/, '$1 $2')
  //           .replace(/^(\d{4}\s)(\d{4})(\d{0,4})/, '$1$2 $3')
  //           .replace(/^(\d{4}\s)(\d{4}\s)(\d{4})(\d{0,4})/, '$1$2$3 $4');
  //       setCardNumber(mask);
  //     } else if (id == 'month') {
  //       setMonth(value);
  //     } else if (id == 'year') {
  //       setYear(value);
  //     } else if (id == 'cvc') {
  //       setCvc(value);
  //     }
  // };


  const handleChangeName = (e: string) => {

    setName(e);
    // if (!e) {
    //   console.log("Nao ha nada aqui!!")
    // } else {
    //   console.log(name)
    // }
  };

  const handleChangeNumber = (e: any) => {
    setCardNumber(e);
  }
  const handleChangeMonth = (e: any) => {
    setMonth(e)
  }
  const handleChangeYear = (e: any) => {
    setYear(e)
  }
  const handleChangeCvc = (e: any) => {
    setCvc(e)
  }

  return (
    <>
      <div className="App w-screen h-screen tracking-[0.150rem] text-[0.75rem] flex flex-col md:grid md:grid-cols-2 md:flex-row md:place-content-center place-items-center md:max-w-screen-2xl">
        <div className="w-full md:h-screen md:w-80 md:place-self-start ">
          {windowSize >= 768 ? (
            <img
              className=" max-w-max"
              src="/bg-main-desktop.png"
              alt="degrade image"
            />
          ) : (
            <img
              className="w-full h-60"
              src="/bg-main-mobile.png"
              alt="degrade image"
            />
          )}
          <img
            className=" absolute top-8 right-4 z-10 max-w-[286px] md:max-w-7xl md:left-72 md:top-[25rem] "
            src="/bg-card-back.png"
            alt="back of a card"
          />
          <img
            className="z-20 absolute top-[121px] left-4 max-w-[286px] md:max-w-7xl md:left-40"
            src="/bg-card-front.png"
            alt="front of the card"
          />
        </div>
        <div className="grid gap-5 z-30 absolute top-[121px] md:left-[11rem] md:top-[17rem] text-2xl text-white w-[410px]">
          <span className="text-3xl">{cardNumber}</span>
          <div className="flex justify-between text-base">
            <span>{name}</span>
            <div className="flex">
              <div>{month}</div>
              /
              <div>{year}</div>
            </div>
          </div>
        </div>
        <div className="z-30 absolute top-24 right-12 md:left-[39rem] md:top-[31.5rem] text-xl text-white">
          <span>{cvc}</span>
        </div>
        <form className="flex flex-col items-center mt-20 gap-6 max-w-[300px] md:max-w-5xl ">
          {/*//todo COLOCAR FORM-GROUP PARA CADA GRUPO DE INPUTS*/}
          <label className="text-dark-violet flex flex-col">
            CARDHOLDER NAME
            <input
              onChange={(e) => handleChangeName(e.target.value)}
              // value={name}
              name="name"
              placeholder="e.g. Jane Appleseed"
              className=" border-2 border-solid w-80 h-11 rounded-lg text-base pl-3"
            />
          </label>
          {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
          <label className="text-dark-violet flex flex-col">
            CARD NUMBER
            <InputMask
              mask={"9999 9999 9999 9999"}
              onChange={(e) => handleChangeNumber(e.target.value)}
              // value={(cardNumber == '0000 0000 0000 0000') ? '' : cardNumber}
              maxLength={19}
              name="number"
              placeholder="e.g. 1234 5678 9123 0000"
              className=" border-2 border-solid w-80 h-11 rounded-lg text-base pl-3"
            />
          </label>
          {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
          <div className="flex w-80 border-box">
            <label className="text-dark-violet">
              EXP. DATE (MM/YY)
              <div className="flex gap-[11px]">
                <InputMask
                  mask={"99"}
                  onChange={(e) => handleChangeMonth(e.target.value)}
                  name="month"
                  placeholder="MM"
                  className=" border-2 border-solid w-[4.5rem] h-11 rounded-lg text-base pl-3"
                />
                {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
                <InputMask
                  mask={"99"}
                  onChange={(e) => handleChangeYear(e.target.value)}
                  name="year"
                  placeholder="YY"
                  className=" border-2 border-solid w-[4.5rem] h-11 rounded-lg text-base pl-3"
                />
              </div>
            </label>
            <label className="flex flex-col ml-2">
              CVC
              <InputMask
                mask={"999"}
                onChange={(e) => handleChangeCvc(e.target.value)}
                name="cvc"
                placeholder="e.g. 123"
                className=" border-2 border-solid w-[10rem] h-11 rounded-lg text-base pl-3"
              />
            </label>
          </div>
          <div className="pb-8">
            <button
              className=" text-white bg-dark-violet w-80 h-11 rounded-lg"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
