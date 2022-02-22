const encode = input => [...input]
.map((x, i) => [x.charCodeAt(0), i])
.sort()
.flat()
.join('.')
.match(/./g)
.flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
.join('')

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
  
  return decArr(NormallSort(separation(inputText(numbers))).map(x=>x[1]))
}


console.log(decoding(encode("Test this decodera")))
console.log(decoding(encode("One more Test this decodera")))

console.log(decoding("1111001111011111111111101111001111111111110111100000000001000011000000000000000000100000010000111100001000000001000011110000001000011111111111101111000011111111110111100000000100001111000000000000001000011111111111111011110000111111111111111111011111111110111100001111111111111111110111111111111111111110111111110000001000010000000011111101111111111111101111111111111111000000001001000000000000000011111111110111111111111111101111111111111111110000000010000111101111111111111111111100000000000000001000011011111111111111111111000000000000000010000000000000000001000000000000000000001111111111111111111101111000000"))
