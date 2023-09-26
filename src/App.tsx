
import { useEffect, useState } from 'react'
import TplRenderer from './components/TplRenderer'


function App() {

  useEffect(()=> {
    const controller = new AbortController();

    fetch('http://127.0.0.1:4010/api/422.37546357374447/programs/nostrum/application-form', { signal: controller.signal })
    .then(resp=> resp.json())
    .then(data=> console.log(data))

    return ()=> controller.abort()
  }, [])
  const ApplicationTpl : IApplicationFormTpl = {
    title: 'Application Form',
    sections: [
      {
        title: 'Image Upload',
        type: 'image',
      }
    ]
  }
  return (
    <div>
      <TplRenderer
        readOnly={false}
        tpl={ApplicationTpl}
        onChange={(path, value)=> {console.log({path, value})}}
      />
    </div>
  )
}

export default App
