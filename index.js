//To avoid playing from start if the marker flickers, not sure if needed, but it might be a failsafe when you have mutiple markers and want to make sure the first finishes before launching the second
var playing = false;

//HTML5 audio, will need user touch input to start on mobile
var intro = new Audio("Trex.mp3");

//Detect end of audio
intro.addEventListener("ended", function() {
	intro.currentTime = 0;
	playing = false;
});

AFRAME.registerComponent('markerhandler', {
	init: function() {
		// Set up the tick throttling. Will check if marker is active every 500ms
		this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
	},
	tick: function(t, dt) {
		
		if (document.querySelector("#animated-marker").object3D.visible == true && playing == false) {
			// MARKER IS PRESENT
			intro.play();
			playing = true;
		} else {
			// MARKER IS HIDDEN, do nothing (up to you)
		}

	}
});