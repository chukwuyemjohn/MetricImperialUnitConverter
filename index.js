/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInputEl = document.getElementById("userinput-el")
const btnEl = document.getElementById("btn--converter")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

/* Length (Meter/Feet) */
function convertToMeters(num){
    return num / 3.281
   
}
function convertToFeet(num){

    return num * 3.281
}

/* Volume (Liters/Gallons) */
function convertToGallons(num){

    return num * 3.78541 
}
function convertToLiters(num){

    return num / 3.785

}

/* Mass (Kilograms/Pounds) */
function convertToKilo(num){

    return num * 2.204 
}
function convertToPound(num){

    return num / 2.204
}


btnEl.addEventListener('click',function(){
    
   const inputValue = parseFloat( userInputEl.value)

    /* error handling */
   if(isNaN(inputValue) || inputValue < 0 || inputValue === 0){
    alert(" please enter a positive number")
    return 
   }

    /* Length (Meter/Feet) */
   const feetValue = convertToFeet(inputValue)
   const metersValue = convertToMeters(inputValue)
   lengthEl.innerHTML =
   ` <p class=" output"  >
        ${inputValue} meters = ${feetValue.toFixed(3)} feet | ${inputValue} feet = ${metersValue.toFixed(3)} meters
     </p>`

    /* Volume (Liters/Gallons) */
      const litersValue = convertToLiters(inputValue)
      const gallonValue = convertToGallons(inputValue)
   volumeEl.innerHTML =
   ` <p class=" output"  >
        ${inputValue} liters = ${litersValue.toFixed(3)} gallons | ${inputValue} gallons = ${gallonValue.toFixed(3)} liters
     </p>`

    /* Mass (Kilograms/Pounds) */
   const kiloValue = convertToKilo(inputValue)
      const poundValue = convertToPound(inputValue)
   massEl.innerHTML =
   ` <p class=" output"  >
        ${inputValue} kilos = ${kiloValue.toFixed(3)} pounds | ${inputValue} pound = ${poundValue.toFixed(3)} kilos
     </p>`
    
    
})
