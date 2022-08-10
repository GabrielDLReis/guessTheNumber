import React, { useState } from 'react'
import './App.css'
import PopUp from './components/PopUp'


function App() {

  const [onClickCss, setOnClickCss] = useState(false)
  const [number, setNumber] = useState("")
  

  const RandomNumber = (max : number) => {
    return Math.floor(Math.random() * max)
  }
  
  const random = RandomNumber(10) + 1
  
  var stringToNumber = number
  
  const nowIsNumber = Number(stringToNumber)
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setOnClickCss(true)

    setTimeout(() => {
      setOnClickCss(false)
      setNumber("")
      
    }, 5000)
    
  }

  

  return (
    <div className="Teste">
      <div className="App">
        

        <div className="pageOne">
          <form onSubmit={handleSubmit}>

            <div className="title"><h1>Qual o Número?</h1>
            </div>
              <h3>Digite um número de um a dez: </h3>
                <div className="numberInput">
                <input type="text"
                name='numberValue'
                id='clearInput'
                placeholder='Apenas números entre 1 e 10'
                onChange={e => setNumber(e.target.value) }
                value={number}
                
                required
                />
                
              </div>

                <div className="sendButton">
                <input className="submitButton" type="submit" value="Confirmar"/>
                </div>

                

          </form>
        </div>
      </div>
    <PopUp numberInput={nowIsNumber} randomNumber={random} runAfterSubmit={onClickCss}/>
    </div>
  )
}


export default App
