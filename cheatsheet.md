#CSS-GRID
justify-items {
	start: start beginning of its column
	center: center
	end: start at the end of the column
	stretch: default
}

align-items {
	start: start beginning of its row
	center: center
	end: start at the end of the row
	stretch: default
}

align-self/justify-self {
	acts on individual items
}

lines enables powerfull positioning such as overlapping	 {
	grid-colum: 1/x item takes entire x colums starting at the first column
	grid-row: 1/x item takes entire x rows starting at the first row
	grid-colum: 2/x item takes entire x colums starting at the first second column displacing any items if exist
	grid-row: 2/x tem takes entire x rows starting at the first second row displacing any items if exist
}

grid-template-areas: 
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