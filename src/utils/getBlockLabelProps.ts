export const getBlockLabelProps = (props:BlockLabelProps) => {
  
    const blockLabelProps = [
      'label',
      'sublabel',
      'isRequired',
      'readOnly',
      'className',
      'style',
    ]
  
    const labelProps = {}
    
    Object.keys(props).map((key) => {
      if (blockLabelProps.includes(key)) {
        labelProps[key] = props[key]
      }
    })
    return labelProps
  }