
import { useEffect, useState } from 'react'
import ApplicationFormRenderer from './components/ApplicationFormRenderer'
import getPathTargetObj from './utils/getPathTargetObj'


function App() {

  const [formData, setFormData] = useState<null | IApplicationFormTpl>(null)

  const tplRendererMap = {
    "applicationForm": ApplicationFormRenderer 
  }

  useEffect(()=> {

    fetch('http://127.0.0.1:4010/api/422.37546357374447/programs/nostrum/application-form')
    .then(resp=> resp.json())
    .then(respObj=> setFormData(respObj.data))
    .catch(console.error)
  }, [])

  const updateFormData =(fieldPath:string, value:any)=>{

    if (formData){
      const {targetObj, pathList, objCopy} = getPathTargetObj(fieldPath, formData.attributes);

      targetObj[pathList[pathList.length - 1] as keyof typeof targetObj] = value;

      const newFormData = {...formData, attributes: objCopy};

      setFormData(newFormData)
      fetch("http://127.0.0.1:4010/api/707.8783589071377/programs/molestias/application-form", {
        method: "PUT",
        body: JSON.stringify({data: newFormData}),
        headers: {
          "content-type": "application/json"
        }
      })
    }  
  }

  const Renderer = formData && tplRendererMap[formData?.type as keyof (typeof tplRendererMap)];

  return Renderer && (
      <Renderer
        readOnly={false}
        data={formData}
        onChange={updateFormData}
      />
  )
}

export default App
