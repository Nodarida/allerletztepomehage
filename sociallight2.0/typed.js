document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.type', {
        strings: ["", "communicates with light", "will tell you if ", "there is a problem", "a question", "or a - done for today!"],
        stringsElement: null,
		// typing speed
		typeSpeed: 60,
		// time before typing starts
		startDelay: 600,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 50,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
      });
  });