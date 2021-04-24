document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.type', {
        strings:["", "soon...", "bald...", "em breve...", "bientôt...", "很快...", "presto..." ],
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