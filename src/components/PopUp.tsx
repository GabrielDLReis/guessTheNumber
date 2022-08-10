import react, { useState } from 'react'


interface Props {
  numberInput: number
  randomNumber: number
  runAfterSubmit: boolean
}

function PopUp({ numberInput, randomNumber, runAfterSubmit }: Props) {
  const [popupString, setPopupString] = useState('')

  const numberAfterRandomize =
    numberInput > randomNumber
      ? 'Maior'
      : numberInput == randomNumber
      ? 'Igual'
      : 'Menor'

  return (
    <div className={runAfterSubmit ? "PopUpTwo" : "PopUp"}>
      <div className="NumberRandomized">
        <p className="textFromNumber">
          Seu número é {numberInput} e o número gerado é {randomNumber}, portanto, o seu resultado é {numberAfterRandomize}
        </p>
      </div>
    </div>
  )
}

export default PopUp

// comment
// const popUpGreat = (props : number) => {
//  <div>"O número gerado é " + random + ". Por tanto, o número que você digitou é maior!"</div>
// }

// const popUpLess = (props : number) => {
//   <div>"O número gerado é " + random + ". Por tanto, o número que você digitou é menor!"</div>
// }

// const popUpIqual = (props : number) => {
//   <div>"O número gerado é " + random + ". Por tanto, o número que você digitou é igual, parabéns!" </div>
// }
