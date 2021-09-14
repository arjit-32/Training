# HTML
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

---

# CSS

## Selector Types
	*	Universal
	h1 	Type selector
	h1,h2,h3   Group selector
	.sample	  Class Selector
	#sample   ID Selector
	#sample h1  Descendant Selector
	#title>p   Child Selector
	h1 + p   Adjacent Sibling Selector
	h1 ~ p   General  Sibling
	E[att="Value"]   Attribute

## Backgrounds
	background-image 
		url,none
	background-position
		top left | top center | top right
		center left | center center | center right
		bottom left | bottom center | bottom right
		x-% y-%
		x-pos y-pos
	background-size
		length, %, auto | cover | contain
	background-repeat
		repeat | repeat-x | repeat-y | no-repeat
	background-attatchment
		scroll | fixed
	background-origin
		border-box | padding-box | content-box
	background-clip
		length, %, border-box | padding-box | content-box | no-clip
	background-color
		color, transparent

## Borders
	border-width
	border-style
	border-color
	border-image
	border-radius

## Font
	font-style
	font-weight
	font-family
	font-size

## Text
	text-outline
	text-align
	text-decoration
	text-shadow
	text-transform
	word-break

## Lists & Markers
	list-style-type
	list-style-position
	list-style-image

## Box Model
	float
	height
	box-sizing: border-box
	margin
	padding
	max-height
	min-height
	display
		none | inline | block | inline block
	overflow 
		visible | hidden | scroll | auto
	clear

## Positioning
	position
		static | relative | absolute | fixed
	z-index
	clip

# Intro
Cascading stylesheet used for website layout & design.
3 methods of adding CSS - 
- Inline CSS
- Internal CSS: Using style tag within single document
- External CSS

*Note - There are websafe fonts, we dont need to import. 
Ex - Arial, Helvetica, sans-serif, courier, monospace*

# Css Positioning

position property ->
*Static*
*Relative* - Just like static, but can add properties like top,left
*Absolute* - Target within relative(or anything other than static), left & right property specify horizontal & vertical offset from containing block.
*Fixed* - Same position always
*Inherit*
*Sticky*



## Clearing Floats
We use `clear:both` property to tell the document to restart normal flow of document, where the floated element ends.
Ex - 
HTML: 
	<div class="services">
		<p>Content</p>
	</div>
	<div class="services">
		<p>Content</p>
	</div>
	<div style="clear: both;"></div> <!--We are using this empty div so that divs after this can use top-margin property-->
CSS:
	.services{
	float: left;
	}
	
	/* This method can be used to clearfix instead of adding emoty div

	.services::after{
		content:"";
		display: block;
		clear: both;
	}
	*/


# Css Flexbox

Flexible box model, clean way to arrange items within a container.

<div class="flex-container">
	<div class="main">1</div>
	<div>2</div>
	<div>3</div>
</div>

.flex-container{
	display: flex;
	flex-direction: row | column | row-reverse | column-reverse
	flex-wrap: wrap(default) | nowrap | wrap-reverse
	justify-content: center | flex-start | flex-end | space-around | space-between <!-- Horizontal align-->
	align-items: center | flex-start | flex-end | stretch | baseline <!--Vertical align-->
}
.main{
	flex: *flex_grow* *flex shrink* *flex basis*
	<!--Ex -> flex: 2 0 0 // Now this item will grow twice compared to other items-->
}

