 //most the value you can get by experimentation
$(function()
{
	$(".fig").click(function(){
		console.log('hi');	
		var this_figure=$(this).attr('rel');
		console.log(this_figure);





    		$('#'+this_figure+" .details").toggle(function(){
    			$('#'+this_figure+" .details").removeClass("hide-me");
    		})
		$('#'+this_figure+" .caption").toggle(function(){
    			$("#figa .details").addClass("hide-me");
    		})

		})
})