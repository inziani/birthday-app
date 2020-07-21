
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

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
    var day = parseInt(dateString[0])
    var month = parseInt(dateString[1])-1
    var year = parseInt(dateString[2])
    var mydate = new Date(year, month, day)
    //inputValues.push(inputVal  + 'The regex works') //update selected value on a list
    //alert(inputValues), alert(dateString), alert(day), alert(month), alert(year)
    if(year < 1000 || year > 3000 || month == 0 || month > 12){
      alert('The year you entered is incorrect')
      return false;
    }
    //adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
      monthLength[1]=29;
      return alert(monthLength) ;
    }
    if (mydate.getDay()=== 1){
       alert('Your Akan name  is ' + ''+ maleNames[0])
    }
    else if (mydate.getDay()=== 2){
      alert('Your Akan name  is ' + ''+ maleNames[1])
    }
    else if (mydate.getDay()=== 3){
    alert('Your Akan name  is ' + ''+ maleNames[2])
    }
    else if (mydate.getDay()=== 4){
    alert('Your Akan name  is ' + ''+ maleNames[3])
    }
    else if (mydate.getDay()=== 5){
    alert('Your Akan name  is ' + ''+ maleNames[4])
    }
    else if (mydate.getDay()=== 6){
    alert('Your Akan name  is ' + ''+ maleNames[5])
    }
    else if (mydate.getDay()=== 7){
    alert('Your Akan name  is ' + ''+ maleNames[1])
    }
    //return  mydate.getDay()//alert (mydate.getDay());// alert(getDay(mydate)), alert(mydate); //
}
}
