# Intro
Markup language for creating web pages.
The purpose of web browser is to read HTML pages.

Attributes - Additional information to HTML elements. Ex- src attribute with img tag


# Common tags
Headings
	<h1>,<h2>,<h3>,<h4>,<h5>,<h6>
Paragraphs
	<p>
Hyperlinks
	<a href="www.arjitsharma.com">Click here</a>
Tables
	<table style="width: 100%">
		<tr>
			<th>Name</th>
			<th>Age</th>
		</tr>
		<tr>
			<td>Arjit</td>
			<td>21</td>
		</tr>
		</table>
Lists
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
	</ul>

   <ol>
   		<li>Item 1</li>
   		<li>Item 2</li>
   </ol>
Others
	<br>,<hr>,<pre>,<!-- Comment -->


# Media
Images
	<img src="www.arjitsharma.com/img.jpg" alt="Alternate text">
Videos
	<video controls>
		<source src="location" type="video/mp4">
	</video>
Audio
	<audio controls>
		<source src="location" type="audio/mp3">
	</audio>
Iframe - Displays a webpage within a webpage
	<iframe src="url" title="description for screen readers"></iframe>	

# Forms

<form>

<!--Text-->
<label for="name">Name </label>
<input type="text" name="name"><br>

<!-- Email --> 
<label for="email">Email </label>
<input type="email" name="email"><br>
  
<!--Password-->
<input type="Password" name="pwd">

<!--Button-->
<input type="Button">

<!--Submit: submitting form data-->
<input type="Submit" value="submit">

<!--File-->
<input type="File" name="filename">

<!--Number-->
<input type="Number" name="quantity" min="1" max="10">

<!--Radio Button-->
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>

<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>


<!--Checkbox-->
<input type="Checkbox" id="option1" name="option1" value="option1">
<label for="option1">Option 1</label>

<input type="Checkbox" id="option2" name="option2" value="option2">
<label for="option2">Option 2</label>

</form>


# Semantic HTML
<header>Head of doc</header>
<nav>Navigation bar/Has Links</nav>
<section>A section in a doc</section>
<article>Independent, self-contained content</article>
<aside>Content aside from content</aside>
<footer>Footer of doc</footer>
<details></details> & <summary></summary>


# Symbols & Emojis
&copy; Copyright
&rarr; Rightarrow
&#128512; Smiley