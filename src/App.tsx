
import { useEffect, useState } from 'react'
import ApplicationRenderer from './components/ApplicationRenderer'
import getPathTargetObj from './utils/getPathTargetObj'


function App() {

  const [formData, setFormData] = useState<null | IApplicationFormTpl>(null)

  const tplTypeMap = {
    "applicationForm": ApplicationRenderer 
  }

  useEffect(()=> {

    fetch('http://127.0.0.1:4010/api/422.37546357374447/programs/nostrum/application-form')
    .then(resp=> resp.json())
    .then(respObj=> setFormData(respObj.data))

  }, [])

  const updateFormData =(fieldPath:string, value:any)=>{

    if (formData){
      const {targetObj, pathList, objCopy} = getPathTargetObj(fieldPath, formData.attributes);

      targetObj[pathList[pathList.length - 1] as keyof typeof targetObj] = value;

      setFormData({...formData, attributes: objCopy})
    }  
  }

  const Renderer = formData && tplTypeMap[formData?.type as keyof (typeof tplTypeMap)];

  return Renderer && (
      <Renderer
        readOnly={false}
        data={formData}
        onChange={updateFormData}
      />
  )
}

export default App
