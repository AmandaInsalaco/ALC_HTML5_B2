function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();
        
    // Create iframe
	var iframe = document.createElement('div');
	iframe.innerHTML = '<p>x</p><iframe width="958" height="539" src="https://www.youtube.com/embed/ze2ZBINvNLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	var video = iframe.childNodes[1];

	// Enter fullscreen mode
	video.requestFullscreen();
        
        
    } 
    else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } 
    else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } 
    
  else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } 
    else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } 
    else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

// Listen for clicks
document.addEventListener('click', function (event) {

	// Check if clicked element is a video thumbnail
	var videoId = event.target.getAttribute('data-video');
	if (!videoId) return;

	// Create iframe
	var iframe = document.createElement('div');
	iframe.innerHTML = '<p>x</p><iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	var video = iframe.childNodes[1];

	// Replace the image with the video
	event.target.parentNode.replaceChild(video, event.target);

	// Enter fullscreen mode
	video.requestFullscreen();

}, false);
