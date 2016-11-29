$(function(){
	// Instantiate MixItUp:
	$('#posts').mixItUp({
		animation: {
			enable: true,
			effects: 'fade scale',
			duration: 800,
			easing: 'ease',
			perspectiveDistance: '3000px',
			perspectiveOrigin: '50% 50%',
			queue: true,
			queueLimit: 1,
			animateChangeLayout: false,
			// animateResizeContainer: true,
			animateResizeContainer: false,
			animateResizeTargets: false,
			staggerSequence: null,
			reverseOut: false,
		},
	});
});

$(function(){
  $(".ioh-slogan").click(function(){
      $("div.controls").show();
  });
});

// $(function(){
//   $().timelinr({
//   	arrowKeys: 'true',
//   	// issuesTransparency：0
//   	issuesTransparency: 0,
//   })
// });