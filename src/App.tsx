
import { useEffect, useState } from 'react'
import ApplicationRenderer from './components/ApplicationRenderer'


function App() {

  const [formData, setFormData] = useState<null | IApplicationFormTpl>(null)
  const tplTypeMap = {
    "applicationForm": ApplicationRenderer 
  }

  useEffect(()=> {
    const controller = new AbortController();

    fetch('http://127.0.0.1:4010/api/422.37546357374447/programs/nostrum/application-form', { signal: controller.signal })
    .then(resp=> resp.json())
    .then(respObj=> setFormData(respObj.data))

    return ()=> controller.abort()
  }, [])

  const updateFormData =(fieldPath:string, value:any)=>{

    if (formData){
      const attributesCopy = JSON.parse(JSON.stringify(formData.attributes))
      let targetObj = attributesCopy;
      const pathList = fieldPath.split('.');
      const len = pathList.length;
      for(let i = 0; i < len-1; i++) {
          let prop = pathList[i];
          targetObj = targetObj[prop as keyof (typeof targetObj)];
      }
      targetObj[pathList[len-1] as keyof typeof targetObj] = value;

      setFormData({...formData, attributes: attributesCopy})
    }  
  }

  const Renderer = formData && tplTypeMap[formData?.type as keyof (typeof tplTypeMap)];

  return Renderer && (
    <div>
      <Renderer
        readOnly={false}
        data={formData}
        onChange={updateFormData}
      />
    </div>
  )
}

export default App
