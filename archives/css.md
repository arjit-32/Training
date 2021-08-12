# Cheat Sheet

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

