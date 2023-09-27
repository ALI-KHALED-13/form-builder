

const getPathTargetObj =(path:string, obj:Object)=> {
  const objCopy = JSON.parse(JSON.stringify(obj))
  let targetObj = objCopy;
  const pathList = path.split('.');
  const len = pathList.length;
  for(let i = 0; i < len-1; i++) {
      let prop = pathList[i];
      targetObj = targetObj[prop as keyof (typeof targetObj)];
  }
  return {targetObj, objCopy, pathList};
}

export default getPathTargetObj;

