Assignment 3 - Part 5(README)
CSCI 1170
Seth Dain
B00960575

******The actual text below is less than 1000 words.


The HTML and CSS for this entire assignment was reused from A2 which was reused partially from A1. Other than a few sections the HTML and CSS are identical and have the same functions. 

Each of the three pages are linked to their corrosponding JS pages named according to the page number. Within each of these JS files there is a reminder notification that is posted by the window with a simple message, filling the notification requirement. 

Index.html starts off with using the exact same HTML and CSS from A2. When you proceed to line 15 - 19, there is a form that is made for the color change section of A3, it creates a form called colorChange, within the form is a field that takes in text, the text taken in is a color of the users choice, next there is a button used for changing the background color to the color inputted by the user, it then creates an onclick event, so when the button is clicked it calls a method in the JS file called backgroundColorChanger, this function within ScriptPage1.js, creates a color variable and sets it to the inputted value by using getElementById, then using this in the next line it calls the css styling element backgroundColor, and changes it to the color that was initialized on the line above, this works well for colors in english, rgb, hexcode, etc. After this button there is another button called the reset button, this uses the same syntax and idea as the other button by calling an onclick method in the JS file called resetBackground, using the same idea as the backgroundColorChanger function, it makes a variable for the color but this time its set to my origional color, then on the next line it selects the background color the same way and sets it to the variable. The code snippet on line 15 - 19 in Index.html that links to all of this new html, css and JS is used within both SecondPage.html as well as ThirdPage.html (all of the html, css and JS is the same throughout for this section). This is the only modifications made to the first and second page (Index.html and SecondPage.html).

The ThirdPage.html file is a bit more complicated and is where most of the work went into. For the origional code, this page reuses the HTML and CSS from A2 with exception to the HTML and JS changed I made for this assignment. The first change is the color changing section described above. Line 70 - 97 is the largest change within this page. It begins with creating a header for a reminder telling the user to make sure to fill out the form created below. Then it goes onto create a form called WebpageSurvey. In this form to start off there is a first name and last name box that both have text inputs and have labels for their corrosponding inputs. They each hold a placeholder explaining what to enter. After this there is a radio type section which is a simple multiple choice selection type asking weather or not this page was helpful to someone who viewed it. There is a yes or no option. After this question there is a section that holds a textarea tag thats labeled as why or why wasnt this website helpful with the resize option as "none" in my css file when targeting that certain tag. In the textarea there is a place holder just holding what you will enter. Below this there is a section for entering your email using the email input type, this is used for if the user has any further questions. Finally there is a submit button that holds an onclick event that calls the checkForm function from the JS file, it simply holds text saying "Submit". Below all of the new form there is an empty div that is there is hold messages changed by the JS based on an error, therefore called "errorMessage". The JS file for this webpage holds all the colorchanger function described above as well as the checkForm function. The checkForm function starts off by creating a variable for the form itself, the submit button, and the error message being displayed all targeted by getElementById. After this, there is an eventListener added to the form which holds a function that takes in an event. Event.preventDefault() is used to prevent default input, as well as reseting the message with empty string (""). Then I create variables for each section of the from and get their values with .value. After this there is a conditional if statement tat checks if there is no input for each of the fields using the variables and the "!" symbol, as well as ".checked" for the radio types. Within the statement a message is made telling the user that there needs to be input for each field, while being in a red box with white text to look more error like. If this isnt true it skips right to after it and displays a green box with white text that says the form has been submitted. The errorMessage div is targeted in the css to change it to a inline-block display to be more visibly pleasing as well. 


File Structure/Asset list:

folder -> A3_st618513
-> images
    -> images/Stack.png 
       images/star.png 
       images/AlanTuring.jpg 
       images/Assignment3SS.png 
       images/B2.jpg 
       images/BillGates.jpg 
       images/ElonMusk.webp 
       images/EmailLogo.jpg 
       images/FacebookLogo.png 
       images/InstagramLogo.png 
       images/MK3.png 
       images/SDIcon.jpg 
       images/SethDain.jpg
-> videos
    -> videos/BouncingBall.mp4
-> ElonMuskQuote.mp3

-> Index.html
-> SecondPage.html
-> ThirdPage.html

-> stylePage1.css
-> stylePage2.css
-> stylePage3.css

-> ScriptPage1.js
-> ScriptPage2.js
-> ScriptPage2.js

-> 1170 A3 - Part 1.pdf
-> 1170 A3 - Part 3.pdf
-> 1170 A3 - Part 4.pdf

-> README.txt


References:

1.		Anon. 2021. If you need inspiring words don’t do it: Elon Musk. (January 2021). Retrieved February 8, 2024 from 
https://www.youtube.com/watch?v=W3RMl6yTfe4 

2.		Anon. 2024. Elon Musk. (February 2024). Retrieved February 8, 2024 from 
https://www.britannica.com/biography/Elon-Musk 

3.		Anon. File:Instagram logo 2016.SVG. Retrieved February 5, 2024a from 
https://commons.wikimedia.org/wiki/File:Instagram_logo_2016.svg 

4.		Anon. Log into Facebook. Retrieved February 5, 2024b from 
https://www.facebook.com/photo.php?fbid=1974423476260142&set=pb.100010775255799.-2207520000&type=3 

5.		Avr-Tk. 2023. Blue mail icon or email vector image on VectorStock. (January 2023). Retrieved February 3, 2024 from 
https://www.vectorstock.com/royalty-free-vector/blue-mail-icon-or-email-vector-45402883 

6.	 Wilson., D. (2023, March 14). 20 of the best personal website examples around: 2022. BrandYourself Blog | ORM and Personal Branding. 
https://brandyourself.com/blog/branding/best-personal-website-examples/ 


7.		kAlvaro. 2020. Position of content-length in middleware stack. (June 2020). Retrieved February 7, 2024 from 
https://discourse.slimframework.com/t/position-of-content-length-in-middleware-stack/4248 

8.		. 2016. Micro SD card icon flat vector image on vectorstock. (March 2016). Retrieved February 5, 2024 from 
https://www.vectorstock.com/royalty-free-vector/micro-sd-card-icon-flat-vector-7788635 

9.		Redação Galileu  07 Jun 2018 - 12h26 Atualizado em 03 Jan 2021 - 14h52 and 07 Jun 2018 - 12h26 Atualizado em 03 Jan 2021 - 
14h52. 17 Fatos e curiosidades sobre a vida do Alan Turing. Retrieved February 7, 2024 from 
https://revistagalileu.globo.com/Cultura/noticia/2018/06/17-fatos-e-curiosidades-sobre-vida-do-alan-turing.html 

10.		Tracey Harrington McCoy. 2022. Bill Gates opens up about his divorce and why he’ll likely drop off list of world’s richest 
people. (December 2022). Retrieved February 8, 2024 from 
https://people.com/human-interest/bill-gates-talks-divorce-why-drop-off-worlds-richest-list-in-year-end-blog-post/