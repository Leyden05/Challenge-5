$(function () {

  var timeBlock = $(".time-block");
  var currentHour = dayjs().hour();
  console.log(currentHour);

  function save() {
    var thing = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    console.log('this worked!');
    localStorage.setItem(thing, input);
  }

  var key = $(this).attr('id');
  hour = parseInt(hour);

// the above function is saying "when the attribute of id is selected and typed in (hence the 'this' parameter), and the attribute of .description (which is really an id of description), then save the input button to local storage on button click (below)

  timeBlock.on('click', '.saveBtn', save);

  timeBlock.each(function() {
    var thisThing = $(this).attr('id');

    if (thisThing) {

    }
  })


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var currentTime = dayjs();


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});