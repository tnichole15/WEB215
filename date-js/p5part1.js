// For reference - The Beatles breakup announcement was made April 10, 1970

/*
Set a date in the past (The Beatles breakup date) and log it to the console
As the date won't change, it's a constant
*/

const breakDate = new Date('1970/04/10');
console.log(breakDate);

/*
Extract the year, month by number, date, and day of week by number and log them to the console
Be sure to log the correct month number. For example, January = 1, not 0
*/

year = breakDate.getFullYear();
month = breakDate.getMonth();
date = breakDate.getDate();
day = breakDate.getDay();

console.log("Year: " + year);
console.log("Month: " + month + 1);
console.log("Date: " +date);
console.log("Day: " + day);
/*
Append a leading 0 to the month number for January through September as those month numbers have a single digit. Log the new number to the console.
*/

if (month < 10) {
  month = '0' + (month + 1);
}

console.log("Month with Leading Zero: " + month);

/*
Convert the month number to a month name (long name, not an abbreviation) and log it to the console
*/

const LONG_MONTH = breakDate.toLocaleDateString('en-US', {
  month: 'long'}
);

console.log(LONG_MONTH);

/*
Convert the day number to a day name (long name, not an abbreviation) and log it to the console
*/

const LONG_DAY = breakDate.toLocaleDateString('en-US', {
  weekday: 'long'}
);

console.log(LONG_DAY);

/* 
Use variables you already have to build a string for the breakup date like this:
Friday, April 10, 1970
*/

var dateString = LONG_DAY + ', ' + LONG_MONTH + ' ' + date + ', ' + year;

/*
Create a <b> element, populate its text with the string above, and place it on the page after the hardcoded <br> tag inside the hardcoded paragraph. If you are cringing because you think the <b> tag is deprecated, read the explanation in Part 2 of this project.
*/

const b = document.createElement('b');
document.body.appendChild(b);
b.textContent = dateString;
//const para = document.querySelector('p:first-of-type');
//var paratext = dateString;

para.insertAdjacentText('beforeend', b);
