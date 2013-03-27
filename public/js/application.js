
$(document).ready(function() {
  var $waiting = $('.waiting')
  var $response = $('#response')
  $waiting.hide();

  $('form').submit(function(e){
    e.preventDefault();

    $waiting.show();
    $response.hide();

    $.ajax({
      method: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize()
    })
    .done(function(data){
      $('p#response').text(data + " successfully posted to twitter");
    })
    .fail(function(a, b, c){
      $('p#response').text("ajax call failed: " +a+" "+b+" "+c);
    })
    .always(function(){
      $response.show();
      $waiting.hide();
    })
  })
});
