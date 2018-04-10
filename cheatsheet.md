#CSS-GRID

#justify-items/align-items(works on individual items)
justify-items {
	start: start beginning of its row
	center: center
	end: start at the end of the row
	stretch: default
}

align-items { (only works if the row is explicitly defined)
	start: start beginning of its column
	center: center
	end: start at the end of the column
	stretch: default
}

#justify-content/align-content(works on entire container)
justify-content {
	start: start beginning of its row
	center: center
	end: start at the end of the row
	space-around: have some space around the container
	space-between: space is evenly between no surrounding space
}

align-content { (only works if the row is explicitly defined)
	start: start beginning of its column
	center: center
	end: start at the end of the column
	space-around: have some space around the container
	space-between: space is evenly between no surrounding space
}


align-self/justify-self {
	acts on individual items
}

#order

order: 0; default
ordered according to number

lines enables powerfull positioning such as overlapping	 {
	grid-colum: 1/x item takes entire x colums starting at the first column
	grid-row: 1/x item takes entire x rows starting at the first row
	grid-colum: 2/x item takes entire x colums starting at the first second column displacing any items if exist
	grid-row: 2/x tem takes entire x rows starting at the first second row displacing any items if exist
}

grid-template-areas: (name specific areas in the grid)
		'showcase showcase top-box-a' will dispaly two showcase then top-box-a
		'showcase showcase top-box-b'; will dispaly two showcase then top-box-b
}

after listing the grid-template-areas you assign them as below.

.showcase {
	grid-area: showcase
}

.top-box-a {
	grid-area: top-box-a;
}
.top-box-b {
	grid-area: top-box-b;
}


#IMPLICIT EXPLICIT TRACKS

explicit => columms or row created by the developer has solid lines in firefox dev-tools

implicit => columms or row created by the browser has dotted lines in firefox dev-tools
grid-auto-rows/columns => Defines implicit items 

#CSS grid-auto-flow 
grid-auto-flow: colums; implicit items will be in the same column
grid-auto-columns: 20px; implicit items will be exactly 20px

#fr(fractional unit) => fraction left after all explicit items have been placed (free space)
grid-template-columns: 1fr; implicit items occupy entire one column space evenly
grid-template-columns: 1fr 2fr 1fr; implicit items occupy entire three column space with items in the second column taking twice as much space

grid-template-rows: same as columns but works on row. When using it you have to give an explicit height for the container

grid-template-columns: auto 1fr; first column takes space according to the item with the biggest elements in it

#REPEAT
grid-template-colums: repeat(4, 1fr) will be 4 columns same size 

#GRID ITEMS
grid-column/grid-row: span 2; single item will take twice the size as other items in the column

grid-column-start: 2; item will start from the second column
grid-column-end: 4; item will end at the fourth column {
	grid-column: 2 / 4 same as above two
	grid-column: 2 / span 2 same as above three
	grid-column: 1 / -1 takes the entire column
}
grid-row {
	same as column but grid-template-row has to be explicit inputed
}

#auto-fit and auto-fill
grid-template-columns: repeat(auto-fill, 150px); each item takes 150px and occupies entire screen width reducing the number in a column with screen size change. Important when you want to place the last item at the end of the column
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); takes 150px by default but scales when screen size changes displacing items to the next line.

grid-template-columns: repeat(auto-fit, 150px); same as autofill but no extra grids are created incase of free space.
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); takes 150px by default but scales when screen size changes living no extra spaces

grid-template-columns: fit-content(100px) 150px 150px 150px; first item will be 100px regardless of screen size or items in it

#grid-auto-flow dense Block Fitting
grid-auto-flow: dense; items that do not fit are moved to the next column while fitting ones occupy the space left. It ensures no empty spaces are left beetween items.