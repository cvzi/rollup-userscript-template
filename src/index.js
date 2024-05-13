import * as ReactDOM from 'react-dom'

import helloWorld from './examplePlain.js'
import getSomeValueFromGM from './exampleTypedGM.ts'
import SomeList from './exampleReact.tsx'

document.body.innerHTML = ''

const root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')))

root.render(
  <SomeList name={helloWorld} />
)

getSomeValueFromGM().then(function (s) {
  root.render(
    <SomeList name={s} />
  )
})
