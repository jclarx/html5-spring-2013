<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Joan Clark — Calculator Widget</title>
<link href="css/jcprojects.css" rel="stylesheet" type="text/css">
<link href="bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/calc.css" rel="stylesheet" type="text/css">
</head>

<body>
<div id="wrapper" class="container">
<header> <a href="index.php"><img src="images/joandotclark.gif" width="300" height="68" alt="joan clark"></a> 
		<h2>&nbsp;</h2>
	</header>
<div id="barhead">
	<h1>Calculator Widget</h1>
	</div>
<nav><!-- top nav -->
	<!--<div class="menu">
		<ul>
			<li><a href="http://student.santarosa.edu/%7Ejclark2/javascript/index.php">Home</a></li>
			<li><a href="http://student.santarosa.edu/~jclark2/javascript/project1.php">Project 1</a></li>
			<li><a href="http://student.santarosa.edu/~jclark2/javascript/project2.php">Project 2</a></li>
			<li><a href="http://student.santarosa.edu/~jclark2/javascript/project3.php">Project 3</a></li>
			<li><a href="http://student.santarosa.edu/~jclark2/javascript/project4.php">Project 4</a></li>
			<li><a href="http://student.santarosa.edu/~jclark2/javascript/project5.php">Project 5</a></li>
			<li><a href="http://student.santarosa.edu/~jclark2/javascript/project6.php">Project 6</a></li>
			<li><a href="finalProject/dropoff.html">FINAL PROJECT</a></li>
		</ul>
	</div>-->
</nav><!-- end top nav -->

<!-- MAIN CONTENT -->
<article>
  <div id=calcWrap>
  <div id=display>0</div>
  <table class=table id=controls>
    <tr>
      <td><button class="btn number">1</button></td>
      <td><button class="btn number">2</button></td>
      <td><button class="btn number">3</button></td>
      <td><button class="btn operator">+</button></td>
      </tr>
    <tr>
      <td><button class="btn number">4</button></td>
      <td><button class="btn number">5</button></td>
      <td><button class="btn number">6</button></td>
      <td><button class="btn operator">-</button></td>
      </tr>
    <tr>
      <td><button class="btn number">7</button></td>
      <td><button class="btn number">8</button></td>
      <td><button class="btn number">9</button></td>
      <td><button class="btn operator">*</button></td>
      </tr>
    <tr>
      <td><button class="btn number">0</button></td>
      <td><button id='blk' class="btn"></button></td>
      <td><button class="btn operator">√</button></td>
      <td><button class="btn operator">/</button></td>
      </tr>
    <tr>
      <td><button id=clear class="btn btn-warning">C</button></td>
      <td id='neg'><button class="btn number">-</button></td>
      <td><button class="btn operator">ex</button></td>
      <td><button id=enter class="btn btn-primary">=</button></td>
      </tr>
  </table>
  </div>
  <h3>&nbsp;</h3>

</article>
<!-- END MAIN CONTENT -->
<aside id="sidebar">
  <h2>Javascript Calculator Widget Instructions</h2>
  <p>The functions this on-screen calculator can process are&nbsp;addition, subtraction, multiplication, square root, exponents and calculate with negative numbers.  </p>
  <p><strong>To &ldquo;Clear&rdquo;&nbsp;Using Keyboard: </strong>You have the option of using the Spacebar or the &quot;C&quot; key.</p>
  <p><strong>Kyeboard Functions: </strong>Most functions can be done with the use of the numbers on your keyboard. However, some function buttons only work for the onscreen mode using your mouse (i.e., not tied to the keyboard). </p>
  <p><strong>Exponent (x to the y power):</strong> Tap the base number ('x') you want, then the 'ex' button, then the exponent&nbsp;('y') and tap the '=' button. <br>
    For example, to get 2 to the 4th power: tap '2', 'ex', '4', '=' and you will get the answer '16'.</p>
  <p><strong>Square root (the square root of x):</strong> Tap the number whose square root you seek (AKA the radicand), <br>
    Tap the √ button,  tap your radicand AGAIN, then tap the '=' button. <br>
    This will produce the square root of any radicand. <br>
    For example, tap the following sequence: <br>
    '25', '√', 25', '=', this will produce '5' (the square root of 25).</p>
  <p><strong>Negation: </strong>To negate a number, click the 'minus sign' (-) button that is surrounded with dark blue, then the integer. <br>
    (Example equation: for -8 x 9,  tap '-', '8', '*', '9', '=' to see the result: -72).</p>
  <p>Always <strong>Clear</strong> the results after each equation!</p></aside>
  
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="scripts/calcKeys.js"></script>
</div><!-- end wrapper div -->


</body>
</html>