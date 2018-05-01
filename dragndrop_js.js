$(document).ready(function(){

	// $('.side_bar_switch').on('click',function(){
	// 	if ($('.side_bar').hasClass('opened')){
	// 		$('.side_bar').css('width','30px');
	// 		$(this).html('>');
	// 	}
	// 	else{
	// 		$('.side_bar').css('width','300px');
	// 		$(this).html('<');
	// 	}
	// 	$('.side_bar').toggleClass('opened');
	// });

	$('.dropdown_btn').hover(function(){
			$('.dropdown_content').css('display','block');
		} 
		// },function(){
		// 	$('.dropdown_content').css('display','none');
		// }
	);

	$('.anchor_icon').attr('src','anchor_icon.jpg');

	var url = 'naver.html';
	$('#iframe').attr('src',url);

    $('#iframe').on('load',function(){
    	$('.anchor_button').toggleClass('waiting');
    });

    $('.anchor_button').on('click',function(){
		if (!$('.anchor_button').hasClass('waiting')){
			$('.anchor_button').toggleClass('ON');
			if ($('.anchor_button').hasClass('ON')){
				$('.anchor_text').text('ANCHORING ON');
				$('.anchor_text').css('color','#1A7448');

				// ANCHOR SELECTOR
				$('#iframe').contents().find('body').find('*').hover(
					function(e){
						e.stopPropagation();
						var offset = $(this).offset()
						offset['top'] += $('#iframe').position()['top'];	
						offset['left'] += $('#iframe').position()['left'];	
						var height = $(this).outerHeight();
						var width = $(this).outerWidth();
						var border_radius = $(this).css('border-radius');
						var scrollTop = $('#iframe').contents().scrollTop();
						var scrollLeft = $('#iframe').contents().scrollLeft();

						$('.anchor').css('height',height);
						$('.anchor').css('width',width);
						$('.anchor').css('border-radius',border_radius);
						$('.anchor').css('top',offset['top']-scrollTop+'px');
						$('.anchor').css('left',offset['left']-scrollLeft+'px');
						$('.anchor').css('display','block');

					},
					function(e){
						e.stopPropagation();
						$('.anchor').css('display','none');
					}
				);

				$('#iframe').contents().find('body').find('*').on('click', function(e){
					e.preventDefault();
					e.stopPropagation();
					$('.anchor').addClass('anchor_fix');
					$('.anchor_fix').removeClass('anchor');

					$('.anchor_text').text('SCREEN FROZEN');
					$('.anchor_text').css('color','#4286f4');
					$('#iframe').attr('scrolling','no');

					console.log($(this));
					$(this).unbind('hover').hover();
				});

			}
			else{
				$('.anchor_text').text('ANCHORING OFF');
				$('.anchor_text').css('color','#575B52');

				$('#iframe').attr('scrolling','auto');
				$('.anchor_fix').addClass('anchor');
				$('.anchor').removeClass('anchor_fix');
				$('.anchor').css('display','none');

				// RELOAD IFRAME
    			$('.anchor_button').toggleClass('waiting');
				$('#iframe').attr( 'src', function ( i, val ) { return val; });
			}
		}
	});

    $('.bubble').on('click',function(){
    	var clone = $(this).clone();
    	$('.anchor_fix').after(clone);
    	clone.css('position','absolute');
    	clone.css('margin','0');
		var offset = $('.anchor_fix').position();
		clone.css('top',offset['top']-65+'px');
		clone.css('left',offset['left']);
    });

	$('#URL').keypress(function(e){
		if (e.which == 13){
			var url = location.protocol+'//'+location.hostname+'/naver.html';
			$('#iframe').attr('src',url);
			console.log(url);
			// console.log($($('#iframe').get(0).contentDocument).find('#query'));
		}
	});



	//FUNCTIONS
	//Make the DIV element draggagle:
	// dragElement(document.getElementById(("mydiv")));
	// $('#mydiv').resizable();

	// function dragElement(elmnt) {
	// 	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	// 	if (document.getElementById(elmnt.id + "header")) {
	// 		/* if present, the header is where you move the DIV from:*/
	// 		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	// 	}
	// 	else {
	// 		/* otherwise, move the DIV from anywhere inside the DIV:*/
	// 		elmnt.onmousedown = dragMouseDown;
	// 	}

	// 	function dragMouseDown(e) {
	// 		e = e || window.event;
	// 		// get the mouse cursor position at startup:
	// 		pos3 = e.clientX;
	// 		pos4 = e.clientY;
	// 		document.onmouseup = closeDragElement;
	// 		// call a function whenever the cursor moves:
	// 		document.onmousemove = elementDrag;
	// 	}

	// 	function elementDrag(e) {
	// 		e = e || window.event;
	// 		// calculate the new cursor position:
	// 		pos1 = pos3 - e.clientX;
	// 		pos2 = pos4 - e.clientY;
	// 		pos3 = e.clientX;
	// 		pos4 = e.clientY;
	// 		// set the element's new position:
	// 		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	// 		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	// 	}

	// 	function closeDragElement() {
	// 		/* stop moving when mouse button is released:*/
	// 		document.onmouseup = null;
	// 		document.onmousemove = null;
	// 	}
	// }

	//INITIALIZE


	//ON CLICK
});