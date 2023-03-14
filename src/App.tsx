import {useState, useEffect} from 'react'
import { InputMask } from "primereact/inputmask";
import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  const [nameErr, setNameErr] = useState("");
  const [numberErr, setNumberErr] = useState("");
  const [validMonthYear, setValidMonthYear] = useState(true);
  const [validCvc, setValidCvc] = useState(true);

  const [formHidden, setFormHidden] = useState('')
  const [thankHidden, setThankHidden] = useState('hidden')

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

  const handleChangeName = (e: string) => {

    setName(e);

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.target);

    const formJson = Object.fromEntries(formData.entries())

    validateForm(formJson, 0, 0) //Validate do CARD NAME

  }

  const showErr = (id: number, msg: string) => {
    switch (id) {
      case 0 :
          setNameErr(msg)
          break;

      // case 1 :
      default: break;

    }
  }

  //NEW FUNCTION WITH NEW LOGIC TO VALIDATE THE FORM DATA
  const validateForm = (input: { [p: string]: File | string }, error: number, wordlenght: number) => {

    if (!wordlenght) {

      if (!input.name) {
        showErr(0, "Can't be blank")
      } else {
        showErr(0, "")
      }

    }

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
          <span className="text-3xl">
            {!cardNumber ? "0000 0000 0000 0000" : cardNumber}
          </span>
          <div className="flex justify-between text-base">
            <span>{!name ? "Jane Appleseed" : name}</span>
            <div className="flex">
              <div>{!month ? "00" : month}</div>/
              <div>{!year ? "00" : year}</div>
            </div>
          </div>
        </div>
        <div className="z-30 absolute top-24 right-12 md:left-[39rem] md:top-[31.5rem] text-xl text-white">
          <span>{!cvc ? "000" : cvc}</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className={"flex flex-col items-center mt-20 gap-6 max-w-[300px] md:max-w-5xl " + formHidden}
        >
          <label className="text-dark-violet flex flex-col">
            CARDHOLDER NAME
            <input

              onChange={(e) => handleChangeName(e.target.value)}
              name="name"
              placeholder="e.g. Jane Appleseed"
              value={name}
              className=" border-2 border-solid w-80 h-11 rounded-lg text-base pl-3"
            />
            <span className={"text-red-500 mt-1"}>{nameErr}</span>
          </label>
          {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
          <label className="text-dark-violet flex flex-col">
            CARD NUMBER
            <InputMask
              required
              mask={"**** **** **** ****"}
              onChange={(e) => handleChangeNumber(e.target.value)}
              maxLength={19}
              name="number"
              placeholder="e.g. 1234 5678 9123 0000"
              className={" border-2 border-solid w-80 h-11 rounded-lg text-base pl-3 " }
            />
            <div className=" text-red-500 mt-1">
              {numberErr}
            </div>

          </label>
          {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
          <div className="flex w-80 border-box">
            <label className="text-dark-violet">
              EXP. DATE (MM/YY)
              <div className="flex gap-[11px]">
                <InputMask
                  required
                  mask={"99"}
                  slotChar={"  "}
                  onChange={(e) => handleChangeMonth(e.target.value)}
                  name="month"
                  placeholder="MM"
                  className=" border-2 border-solid w-[4.5rem] h-11 rounded-lg text-base pl-3 "
                />
                {/*todo COLOCAR A SPAN DO ERRO DE DIGITACAO DO INPUT*/}
                <InputMask
                  required
                  mask={"99"}
                  slotChar={"  "}
                  onChange={(e) => handleChangeYear(e.target.value)}
                  name="year"
                  placeholder="YY"
                  className=" border-2 border-solid w-[4.5rem] h-11 rounded-lg text-base pl-3"
                />
              </div>
              {!validMonthYear && (
                <div className=" text-red-500 mt-1">Can't be blank</div>
              )}
            </label>
            <label className="flex flex-col ml-2">
              CVC
              <InputMask
                required
                mask={"999"}
                slotChar={"   "}
                onChange={(e) => handleChangeCvc(e.target.value)}
                name="cvc"
                placeholder="e.g. 123"
                className={" border-2 border-solid w-[10rem] h-11 rounded-lg text-base pl-3 "}
              />
              {!validCvc && (
                <div className=" text-red-500 mt-1">Can't be blank</div>
              )}
            </label>
          </div>
          <div className="pb-8">
            <button
              className=" text-white bg-dark-violet w-80 h-11 rounded-lg text-xl"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
        <div className={" max-w-5xl text-center flex flex-col place-items-center gap-8 " + thankHidden}>
          <div className="w-24">
            <img
              className=" w-full"
              src="/icon-complete.svg"
              alt="checked icon"
            />
          </div>
          <h1 className=" text-4xl text-dark-violet">THANK YOU!</h1>
          <div className=" text-dark-gray-violet text-">We've added your card details</div>
          <button
              onClick={() => document.location.reload()}
              className=" mt-2 text-white text-xl bg-dark-violet w-80 h-11 rounded-lg">Continue</button>
        </div>
      </div>
    </>
  );
}

export default App
