
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

var reg_exp = RegExp('/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/')
var birthday = document.getElementById("birthDay").value

//==========================================================================================
//This function validates that the birthday field;
// - is not empty 
// - has a valid date
//==========================================================================================

function validateBirthday(){
  if (birthday === ""){//|| !reg_exp.test(toString(birthday))){
    alert('Please key in your birthday in the format "DD/MM/YYYY');
    //document.getElementById("birthDay").focus();
    return true;
  }
  else  if(!reg_exp.test(birthday)){ 
    alert('Please key in your birthday in the format "YY/YM/YYYY')
    return true
  }
  else {
    return birthday
  }

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

var inputValues = []
function getFieldSet(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("birthDay").value;
  if (inputVal==="")
  {
    return alert('fill in your birthday in "DD/MM/YYYY" format')
  }
  //I need to get help on building the date format validation regex
  //else if(!reg_exp.test(document.getElementById("birthDay").value)){
    //alert( document.getElementById("birthDay").value + ""+ 'There seems to be a match ')
//}
  else{
    var dateString = inputVal.split('/')
    inputValues.push(inputVal  + 'The regex works') //update selected value on a list
    alert(inputValues), alert(dateString)
  }
}
