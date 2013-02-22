<!doctype html>
<html><!-- InstanceBegin template="/Templates/projects_bootstrap.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- InstanceBeginEditable name="doctitle" -->
<title>Joan Clark &ndash; Spring 2013 Projects</title>
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
<!-- InstanceEndEditable -->
<!-- InstanceBeginEditable name="head" -->
<link href="../bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="../css/jcprojects2.css" rel="stylesheet" type="text/css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
<!-- InstanceEndEditable -->
</head>
<body>
<div class="container">
<section class="row-fluid">
<header class="row-fluid"> 
	<hgroup class="span12">
		<h1 id="animated_div" class="span4"><a href="index.php"><img src="../images/joandotclark.gif" alt="joan clark" width="300" height="68" id="jclark"></a></h1>
       	<h2 class="span6">HTML5 CS50.12  | Spring&nbsp;2013</h2>
	</hgroup>

<!-- top nav -->
<nav class="menu span12">
      <h3 id="barhead">Coursework</h3>
		<ul class="row-fluid">
			<li class="span2"><a href="index.php">Home</a></li>
			<li class="span2"><a href="project1.php">Project 1</a></li> 
			<li class="span2"><a href="index.php">Project 2</a></li>
			<li class="span2"><a href="project3.php">Project 3</a></li>
			<li class="span2"><a href="project4.php">Project 4</a></li>
			<li class="span2"><a href="project5.php">Project 5</a></li>
		</ul>
</nav>
<!-- end top nav -->
</header>
<!-- end header -->
<div class="row-fluid">
<!-- MAIN CONTENT --><!-- InstanceBeginEditable name="Main Content" -->

<section class="span7">
	<hgroup>
    <h1>Home Page (Doubling as Project 2)</h1>
<!--	<h2>h2...</h2>-->
	</hgroup>
    <p>Hi there Visitor. I assume you are here to view the progress work from my HTML5 class. If that’s so, you’re in the right place. </p>
    <p>The first thing you'll see is my name spinning away, shifting color, and returning to its place. Though it may be simple, the really cool thing is that this is done completely with CSS. Here is the basic code in my css file that makes the animation: </p>
    <p>#animated_div { animation: animated_div 5s 1; }</p>
    <p>@keyframes animated_div {<br>
      0%		{transform: rotate(0deg);left:0px;}<br>
      25%		{transform: rotate(20deg);left:0px;}<br>
      50%		{transform: rotate(0deg);left:500px;}<br>
      55%		{transform: rotate(0deg);left:500px;}<br>
      70%		{transform: rotate(0deg);left:500px;background-color: rgba(30, 199, 230, .5);}<br>
      100%	{transform: rotate(-360deg);left:0px;}<br>
      }</p>
    <p>I have also used this page to experiment with Bootstrap, as well as to apply several different attributes that are new to CSS3. For example: </p>
    <ul>
      <li>I used a background linear gradient in the &quot;Coursework&quot;&nbsp;bar</li>
      <li>I’ve used border-radius in several places</li>
      <li>there is a text-shadow on the menu a:hover selector in the nav&nbsp;bar</li>
      <li>also I've applied a transition to the font size for the menu a:hover selectors</li>
      <li>there is an inset box-shadow using rgba coloring is applied to the &quot;aside&quot; (which will show as a right sidebar, or at the bottom of the window, depending on the width of your&nbsp;browser).</li>
    </ul>
</section>
<!-- InstanceEndEditable --><!-- END MAIN CONTENT -->
<!-- InstanceBeginEditable name="Sidebar" -->
<aside class="span4 offset1" id="sidebar">
	<h3>A space for additional comments and whatnot</h3>
	<p>This area is in an &lt;aside&gt; tag. Border radius and an inset box-shadow with rgba color has been applied. I used the &lt;figure&gt; tag and &lt;figcaption&gt; tags on the HTML5 logo and text below.</p>
	<p>&nbsp;</p>


<figure>
<a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" 
width="90" alt="HTML5 Powered with CSS3 / Styling, and Semantics"
title="HTML5 Powered with CSS3 / Styling, and Semantics">
</a>
<figcaption>HTML5 Validator</figcaption>
</figure>
</aside>

<!-- InstanceEndEditable --></div>
</section><!-- end wrapper section -->

</div> <!-- end container -->

</body>


<!-- InstanceEnd --></html>