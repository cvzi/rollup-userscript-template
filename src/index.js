import * as ReactDOM from 'react-dom'

import helloWorld from './examplePlain.js'
import getSomeValueFromGM from './exampleTypedGM.ts'
import SomeList from './exampleReact.tsx'

ReactDOM.render(
  <SomeList name={helloWorld} />,
  document.body
)

getSomeValueFromGM().then(function (s) {
  ReactDOM.render(
    <SomeList name={s} />,
    document.body
  )
})
