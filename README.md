# BIRTHDAY APP
Ghanaian Akan names are given to babies based on their date of birth and gender. 

## SETUP
No isntallation required. Open the page on a browser

## AUTHOR 
[inziani][https://github.com/inziani/birthday-app/settings]

## BDD
### Requirements

- The user should see a description of what the application is all about
- The user should have an option to choose their gender
- The user should have a place to key in their birthday
- The user should get feedback on what their Akan name is based on their day of birth and gender after clicking the submit button.

### Specifications

|Behaviour the application should handle|Input it receives (Examples)|The expected output.|
|---------------------------------------|----------------------------|--------------------|
|invalid  day|(d<=0) or (d>31)|ncorrect entry - The day on your birth date should be between 0 and 31|
|invalid month |(m<= 0) or (m > 12)|Incorrect entry - The month on your birth date should be between January and December  (0 -12)|
|invalid day and invalid month|(m<= 0) or (m > 12) and (d<=0) or (d>31)|Please enter a valid date|
|valid date |d is between 1 and 31|True|
|valid month |month is between 1 and 12|True|
|valid date, month and gender|d is between 1 and 31,  month is between 1 and 12, Gender picked from a drop down.|Your Akan name is ‘this one’|

### Steps of the 

1. Check the validity of the date at in- put - On the form
2. Get the date into a list alongside the Gender
3. Convert the date into date time
4. Get the day using getDay (remember to minus one from the month js reads moths from 0-11)
5. Return the names based on the list given.

## Contact Information
ValentineRobai.Inziani@gmail.com

## License Information 

Copyright [2020] [VALENTINE ROBAI INZIANI]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.