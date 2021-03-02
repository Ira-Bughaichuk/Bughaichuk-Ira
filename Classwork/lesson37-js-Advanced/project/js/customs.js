jQuery(document).ready(function() {
   /* $("a")
	$("#some-id")
	$(".someclass")
	$("header>ul li a")*/
	jQuery(".clickHide").click(function(){
		 jQuery(".paragraf").slideToggle("300");
		  return false;
		});
	
	jQuery("ul.menu li.item-456789-menu a:first-child").click(function(event){
		 event.preventDefault();
		});
	
});