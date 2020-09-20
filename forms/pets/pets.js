// creates arrary
var petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', ]

// adds Marmaduke
var withMarmaduke = petNames.concat(['Marmaduke'])

// gets index of sam
let pos = petNames.indexOf('Sam')

// prompts user
var userName = prompt("Please enter your name")
var userAction = prompt("Select one of the following options: 1. Remove Vinny 2. Remove Marty 3. Add Nancy 4. Add Your Name 5. Display Riley's Location 6. Display's Cindy Location 7. Show the withMarmaduke Array")

// removes vinny
if (userAction == "1") {
  let removedVinny = petNames.splice(5,1)
  alert("The action taken was: Remove Vinny \nThe remaining array data are: \n" + petNames)

// removes marty  
} else if (userAction == "2") {
  let removedMarty = petNames.splice(3, 1)
  alert("The action taken was: Remove Marty \n The remaining array data are: \n" + petNames)

// add nancy
} else if (userAction == "3") {
  let newNancy = petNames.unshift('Nancy')
  alert("The action taken was: Add Nancy \n The remaining array data are: \n" + petNames)
  
// need users name action  
} else if (userAction == "4") {
  let addName = petNames.push(userName)
  alert("The action taken was: Add user name \n The remaining array data are: \n" + petNames)
  

// index of riley
} else if (userAction == "5") {
  let posRiley = petNames.indexOf('Riley')
  alert("The index of Riley is:" + "  " + posRiley)
  alert("The action taken was: Index of Riley \n The remaining array data are: \n" + petNames)
 
// index of cindy
} else if (userAction == "6") {
  let posCindy = petNames.indexOf('Cindy')
  alert("The index of Cindy is:" + "  " + posCindy)
  alert("The action taken was: Index of Cindy \n The remaining array data are: \n" + petNames)

// show withmarmaduke arrary data
} else if (userAction == "7") {
  alert(withMarmaduke)
  alert("The action taken was: Show withMarmaduke arrary data \n The remaining array data are: \n" + petNames)
}  