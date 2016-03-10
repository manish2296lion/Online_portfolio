 //most the value you can get by experimentation
$(function()
{
	$(window).scroll(function(){

		var winscroll=$(this).scrollTop();
		console.log('hi');
		var winscroll2=winscroll-$(window).height()/1.45	;
		
		if($(this).scrollTop()<545)//Optimization Technique
		{
			
		$('.logo').css({
			'transform' : 'translate(0px,'+winscroll/1.5+'%)'
		})

		$('.bird').css({
			'transform' : 'translate(0px,-'+winscroll/32+'%)'
		})
		}
		}	
		)
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