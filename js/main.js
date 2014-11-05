$(function() {

  // event handler
  $("#btn-click").click(function(e) {
   // grabs value from the input box after click
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());
		
    // grab input and append to URL
		// $(".person").empty().append($("input.person").val());

		// var myURL = "WebApp/Data";
  //               $.ajax({                  
		// 							type: "POST",
		// 							url: url,
		// 							data: data,
		// 							success: success,
		// 							dataType: dataType
  //               })



    // show mad lib
    $("#story").show();

    // empty the form values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();
  });

  $("#play-btn").click(function(e) {
	  $("#questions").show();   
	  $("#story").hide();
	});
});

