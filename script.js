$(function () {

  var timeBlock = $(".time-block");

  function save() {
    var key = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    console.log('this worked!');
    localStorage.setItem(key, input);
}

// the above function is saying "when the attribute of id is selected and typed in (hence the 'this' parameter), and the attribute of .description (which is really an id of description), then save the input button to local storage on button click (below)

timeBlock.on('click', '.saveBtn', save);

timeBlock.each(function() {
    var key = $(this).attr('id');
    var event = localStorage.getItem(key);

    if (event) {
      $(this).children('.description').text(event);
    }
 

  var currentHour = dayjs().hour();
  var hourTranspose = key.slice(5);

  currentHour = parseInt(currentHour.toString());
  hourTranspose = parseInt(currentHour);



  if (currentHour == hourTranspose) {
    $(this).attr("class", "row time-block present");
  } else if (currentHour < hourTranspose) {
    $(this).attr("class", "row time-block future");
  } else {
    $(this).attr("class", "row time-block past");
  }
});

});