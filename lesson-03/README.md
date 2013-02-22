html5-spring-2013
=================

SRJC CS50.12 Section 5371

PROJECT 2 - CSS3 Lessons

When you visit the webpage at http://joanclark.net/html5/index.php the first thing you'll see is my name spinning away, shifting color, and returning to its place. Though it may be simple, the really cool thing is that this is done completely with CSS. Here is the basic code in my css file that makes the animation:

#animated_div { animation: animated_div 5s 1; }

@keyframes animated_div {
0%	 {transform: rotate(0deg);left:0px;}
25%	 {transform: rotate(20deg);left:0px;}
50%	 {transform: rotate(0deg);left:500px;}
55%	 {transform: rotate(0deg);left:500px;}
70%	 {transform: rotate(0deg);left:500px;background-color: rgba(30, 199, 230, .5);}
100%	{transform: rotate(-360deg);left:0px;}
}

I have also used this page to experiment with Bootstrap, as well as to apply several different attributes that are new to CSS3. For example:

I used a background linear gradient in the "Coursework" bar
I’ve used border-radius in several places
there is a text-shadow on the menu a:hover selector in the nav bar
also I've applied a transition to the font size for the menu a:hover selectors
there is an inset box-shadow using rgba coloring is applied to the "aside" (which will show as a right sidebar, or at the bottom of the window, depending on the width of your browser).
