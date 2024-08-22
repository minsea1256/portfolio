
/*--lang_open--*/
  $(document).ready(function(){ 
  $(".lang > img").on("click", function(){
	   /*$(".lang_open").slideToggle();*/
	   $(".lang_open").toggle();
  });
  }); 

/*--ticker--*/
   function tick(){
  $('#ticker1 a:first').slideUp( function () { 
	  $(this).appendTo($('#ticker1')).slideDown(); 
	  });
 }
 setInterval(function(){ tick () }, 2000);
/*------------*/
  function tick2(){
  $('#ticker2 a:first').slideUp( function () { 
	  $(this).appendTo($('#ticker2')).slideDown(); 
	  });
 }
 setInterval(function(){ tick2 () }, 2000);