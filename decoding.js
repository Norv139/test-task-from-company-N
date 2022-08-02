function decoding(numbers){

  function decArr (arr){
    let uint8Array = new Uint8Array(arr);
    let text = new TextDecoder().decode(uint8Array)
    return text
  }

  const inputText = input => [...input]

  function separation(AnyArr){
    var text = ''
    for(let i=0; AnyArr.length > i; i++){
      var str = AnyArr[i] == AnyArr[i+1]? AnyArr[i]:AnyArr[i]+' ' 
      text += str
    }

    text = text
    .split(" ")
    .slice(0, -1)
    .map(x=>(x.length))
    .map(x=>(x>=2?(x-2)/2:"."))
    .join('')
    .split(".")
    .map(x=>(parseInt(x,10)))

    var promArr =[]
    for(var i=0;text.length>i;i+=2){
      promArr.push(
        [
          text[i+1],
          text[i]
        ]
      )
    }
    return promArr
  } 

  function NormallSort(inputArray){

    var OneArray =[]
    var TwoArray =[]

    for(var i=0;inputArray.length>i;i++){
      if ((inputArray[i][0]+"").length == 1){
        OneArray.push(inputArray[i])
      }
      else{
        TwoArray.push(inputArray[i])
      }
    }

    OneArray = OneArray.sort()
    TwoArray = TwoArray.sort()
    
    return [].concat(OneArray,TwoArray)
    
  }
  
  return decArr(
          NormallSort(
            separation(
              inputText(numbers)
            )
         ).map(x=>x[1]))
}
