maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
userGender = ['M', 'F'];

alert(userGender[0])





function evenNumCalc()
{
var num1 =parseInt(prompt('key in a number'));
 if (num1%2===0){
 alert('that is an even number') ;
 }
 else {
 alert('that is an odd number');
 }
}

evenNumCalc()

birthDay = parseInt(prompt('date of birth'));
gender = prompt('gender');
userGender = ['M', 'F'];
//dayOfWk = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
femaleNames= ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']



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

fetchDay()




