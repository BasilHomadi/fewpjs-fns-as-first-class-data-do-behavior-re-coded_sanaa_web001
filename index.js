/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  
}
/* Write your implementation of displayMessage() */
function greet(hourIn24) {
  if (hourIn24 < 12) {
    return "Good Morning"
  }
  else if (hourIn24 >= 12 && hourIn24 < 17) {
    return "Good Afternoon"
  }
  else if (hourIn24 >= 17) {
    return "Good Evening"
  }
}