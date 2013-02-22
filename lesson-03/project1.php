<!doctype html>
<html><!-- InstanceBegin template="/Templates/jsprojects.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="UTF-8">
<!-- InstanceBeginEditable name="doctitle" -->
<title>Joan Clark &ndash; Spring 2013 Projects</title>
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
<!-- InstanceEndEditable -->
<!-- InstanceBeginEditable name="head" -->
<link href="../css/jcprojects.css" rel="stylesheet" type="text/css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
<!-- InstanceEndEditable -->

</head>

<body>
<section id="wrapper">
<header> 
	<hgroup>
		<h1><a href="index.php"><img src="../images/joandotclark.gif" width="300" height="68" alt="joan clark"></a></h1>
       	<h2>HTML5 CS50.12 with Jay Peretz | Spring 2013</h2>

      <h3 id="barhead">HTML5 Coursework</h3>
	</hgroup>

<!-- top nav -->
<nav class="menu">
		<ul>
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

<!-- MAIN CONTENT --><!-- InstanceBeginEditable name="Main Content" -->
<section class="main">
<article>
<hgroup>
	<h1>Project 1</h1>
	<h2>Based on January 28 assignments</h2>
</hgroup>
	<p>For this &ldquo;project&rdquo;, I used the html template (Dreamweaver) for course projects that I had used during last semester to  convert to semantic markup.	</p>
	<p>The page you are now reading is made directly from that template. I may plan to use the same template for the project pages, if that ends up being a good idea (depending on the nature of the projects).</p>
	<p>I went through all the markup in the template, replacing &lt;div&gt; tags with semantic tags such as &lt;header&gt; in the heading area, &lt;nav&gt; for the horizontal nav bar, &lt;hgroup&gt; (I’ll get to this in a moment), &lt;aside&gt; for the sidebar, as well as using &lt;section&gt; and &lt;article&gt;. Additionally, I used &lt;figure&gt; and &lt;figcaption&gt; for the HTML validator link in the sidebar, but based on something I read, I may change it later on.</p>
    <p>On my first pass, I ran the HTML validator and got an error on the hgroup tag. The error mentioned that there was disallowed “flow content” inside the hgroup, so I found <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#flow-content">this by the whatwg.org</a>, and <a href="http://www.w3.org/html/wg/drafts/html/master/single-page.html#flow-content-1">this article</a>, and realized the problem. Now I know that an &lt;hgroup&gt; can contain <strong><em>only</em></strong> &lt;h1&gt; through &lt;h6&gt; tags, but I had originally set it around my ‘logo’ (in an &lt;a&gt; tag), the line of text that follows (an &lt;h1&gt;), plus the &quot;HTML5 Coursework&quot; line (which was then wrapped in a &lt;div&gt;), and it wouldn’t validate. It did not like the &lt;a&gt; tag or &lt;div&gt;. So I made adjustments and now have the logo-image wrapped in an &lt;h1&gt; tag, the next line in &lt;h2&gt; and changed the “HTML Coursework” &lt;div&gt; to an &lt;h3&gt; styled with an id tag to set it apart. Now it validates fine!</p>
    <p>I had a similar struggle with the main container area (which this writing is wrapped in) with regard to the Semantic Outline. At the base of my problem was some confusion about the difference between &lt;article&gt; and &lt;section&gt;, but <a href="http://demosthenes.info/blog/250/HTML5-Semantic-Container-Elements">this online blog was very helpful</a>. I adjusted my markup until <a href="http://gsnedders.html5.org/outliner/">the HTML Outline tool</a> ended up with better results.</p>
    <p>I investigated and experimented with quite a lot more to come up with the final markup, and while this resulting page is rather more simple than the effort put into it, I learned quite a lot from this.</p>
</article>
	<!--<div> <img name="placeholder" src="" width="300" height="212" alt="">
		<h2>h2...</h2>
		<p>p...</p>
		<p>&nbsp;</p>
		
	</div> -->
  </section>	

<!-- InstanceEndEditable --><!-- END MAIN CONTENT -->
<!-- InstanceBeginEditable name="Sidebar" -->

<aside id="sidebar">
	<h3>Side Comments</h3>
	<p>I want to redo these project pages using the Bootstrap scaffolding when I have the time to do so. First I wanted to absorb and put to use the html5 semantics, as discussed on this page. If time allows, that will be my next goal.</p>
	<p>&nbsp;</p>


<figure>
  <a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" 
width="120" height="32" alt="HTML5 Powered with CSS3 / Styling, and Semantics"
title="HTML5 Powered with CSS3 / Styling, and Semantics">
  </a>
  <figcaption>HTML5 Validator</figcaption>
</figure>
</aside>
<!-- InstanceEndEditable -->
</section>
<!-- end wrapper section -->


</body>


<!-- InstanceEnd --></html>