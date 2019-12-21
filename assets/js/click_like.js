var is_click = 0;
	$(".like_button button").on("click", function() {
	  var $count = $(this).parent().find('.count');
	  if(!is_click){
		  $count.html($count.html() * 1 + 1);
		  is_click += 1;
	  }
	  else if(is_click){
		$count.html($count.html() * 1 - 1);
		is_click = 0;
	  }
});
var is_click2 = 0;
	$(".like_button2 button").on("click", function() {
	  var $count2 = $(this).parent().find('.count2');
	  if(!is_click2){
		  $count2.html($count2.html() * 1 + 1);
		  is_click2 += 1;
	  }
	  else if(is_click2){
		$count2.html($count2.html() * 1 - 1);
		is_click2 = 0;
	  }
});
var is_click3 = 0;
	$(".like_button3 button").on("click", function() {
	  var $count3 = $(this).parent().find('.count3');
	  if(!is_click3){
		  $count3.html($count3.html() * 1 + 1);
		  is_click3 += 1;
	  }
	  else if(is_click3){
		$count3.html($count3.html() * 1 - 1);
		is_click3 = 0;
	  }
});