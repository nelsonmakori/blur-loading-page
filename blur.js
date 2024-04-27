const bg = document.querySelector('.bg')
const loadingNumber = document.querySelector('.loading-text')

let load = 0
const interval = setInterval(blurring,30)




function blurring(){
  console.log(load)
  load++
  if(load > 99){
    clearInterval(interval)}

  loadingNumber.innerHTML = `${load}%`
  loadingNumber.style.opacity = scale(load,0,100,0,)
  loadingNumber.style.color ='white'
  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}
const scale = (number, inMin, inMax, outMin, outMax)=>{
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
blurring()
