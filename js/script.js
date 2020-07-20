
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
userGender = ['M', 'F'];
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

//==========================================================================================
//This function validates that the birthday field is not empty
//==========================================================================================

function validateBirthday(){
  //var inputValBirthday = document.getElementById("birthDay").value
  if (document.getElementById("birthDay").value === ''){
    alert('Please key in your date of birth');
    document.getElementById("birthDay").value.focus();
    return false;
  }
  else{alert('give me a minute')}
  }

  //===========================================================================================
  // This function validates that  the date entered is valid (DDMMYY)
  //===========================================================================================

  
  




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
