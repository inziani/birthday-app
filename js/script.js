
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

var reg_exp = RegExp("/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/")
var birthday = document.getElementById("birthDay").value

//==========================================================================================
//This function validates that the birthday field;
// - is not empty 
// - has a valid date
//==========================================================================================

function validateBirthday(){
  if (birthday === " "|| !reg_exp.test(birthday)){
    alert('Please key in your birthday in the format "YY/YY/YYYY"');
    document.getElementById("birthDay").value.focus();
    return false;
  }
  else if(!reg_exp.test(birthday)){
    alert('Please key in your birthday in the format "MM/DD/YYYY"');
    return false;
  } 

  return true
  }

  //===========================================================================================
  // This function validates that  the date entered is a valid date in the format (DDMMYY)
  //===========================================================================================

function validDate(){



  }
  
  




//birthDay = parseInt(prompt('date of birth'));
//gender = prompt('gender');
//userGender = ['M', 'F'];
//dayOfWk = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7



function fetchDay(){

if (birthDay =1  && userGender[0] === gender){
alert('you were born on a Sunday and your name is ' + " " + maleNames[0]);
}
else if (birthDay =2 && userGender[0] === gender){
alert('you were born on a Monday and your name is ' + " " + maleNames[1]);
}
else{
alert('try again later')
}
}

//fetchDay()

var inputValues = []
function getFieldSet(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("birthDay").value;
  //var inputVal1= document.querySelector(FormData)
  inputValues.push(inputVal + 'test') //update selected value on a list
alert(inputValues)

}
