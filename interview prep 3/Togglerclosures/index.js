// example code
function toggler() {
   let arr=arguments
   index=-1
   return function(){
index+=1
console.log(arr[index])
return
   } 
}

const toggle = toggler(1,2,3)

toggle()

// 1
toggle()
// 2
toggle()
// 3