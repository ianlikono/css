#https://css-tricks.com/snippets/css/a-guide-to-flexbox/


#container properties

display: flex => makes all elemnts in a  container go in the same line with equal width

flex-direction : row-reverse => makes items start from the other side of the container in a reverse manner
flex-direction : column => makes items in a container organize in a column
flex-direction : column-reverse => reverses the column items
flex-wrap: wrap : makes all items to wrap and grow to occupy the specified container width

#justiy-content => works along the main-axis

flex-end => all contents move to the right side
center => all items goes to the center
space-between => items fill entire container width with evenly distributed space between them
space-around => items fill entire container space with evenly distributed space including some space in the beginning and the end. We get single space in the beginning and the end and double space between items


# align-items => works along the cross-axis

stretch => takes entire container height
flex-start => starts from the top and only occupy minimum needed space
flex-end => opposite of start
center => centers them vertically
baseline => aligns items in a single baseline

# align-content => distribution of spaces between rows along the cross axis
flex-start => starts from the top opposite of flex end
space-between distributes those spaces between the rows
center => aligns center
space-around


# item properties

#align-self
same properties as align items but works on individual item

#order => specifies order used to lay items in their container

# by default order is 0 items are organized by their order number
order: 2 => item will fo to the end of the container since all items are order 0 and it has the highest order number

#flex-basis => specifies the initial ideal size of the item same as height when working with rows and width when working with columns
flex-basis: 200px => item will take 200px  when the item is initially mounted
#flex-grow => Dictates how the unused space should be spread amongst flex-items using ratios
flex-grow: 1 => all items share space evenly
flex-grow: 2 => the item will take twice as much space as other items
#flex-shrink => Dictates how items should shrink when there isn't enough space in the container
flex-shrink: 1 => its the default all will shrink at the same length.
flex-shrink: 2 => item will shrink 2 times more

#all propoerties in a single line
<'flex-grow'>
    <'flex-shrink'>
        <'flex-basis'>

flex: 0 0 200px; => grow is 0 shrink is 0 and basis is 200px






