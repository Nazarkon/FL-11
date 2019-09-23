


// $("#someId").css({"prop" : "value", "prop1" : "value1", ...});

//body: add padding 30px
$('body').css({"padding" : "30px"})

// id title: make align center, remove top margin
$('#title').css({"text-align" : "center","margin-top" : "0px"})

// div after header: add double border and padding 20px
$('.row').css({"border" : "10px solid red", "padding" : "20px" , "border-style": "double"})
// change color for all h2 and set top margin to 0
$('h2').css({"color" : "blue" , "margin" : "0px"})
// set font size 18px for all .list direct child
$('.list').css({"font-size" : "18px"})



// ******************************************************
// :even, :odd, :first, :last, :not(), :empty
// :gt() /* all elements at an index greater then specified */
// :lt() /* all elements at an index less then specified */
// :hidden /* display: none, type="hidden", width & height = 0, ancestor is hidden */
// :visible /* are visible */
// :parent /* are parents to other elements, including text node */
// :contains() /* contain the specified text */
// :has() /* contain at least one element that matches the specified selector */
// ******************************************************

// in #list-1
  // show all hidden and not cloned li
  $("#list-1>li:not(.cloned)").show();
  // hide empty li
$("#list-1>li:empty").hide();
// in #list-3
  // for all even li set margin-left -20px
$("#list-3>li:even").css({"margin-left" : "-20px"});
  // for the first li set any different color
$("#list-3>li:first").css({"color" : "red"});
  // for all li with index > 5 set color to #ccc
$("#list-3>li:gt(5)").css({"color" : "#ccc"});
// show ul which is parent

// for li wich has em add red color
$("#list-3>li:has(em)").css({"color": "red"});
// for li which contains text Buratino set font weight to bold
$("li:contains(Buratino)").css({"font-weight": "bold"});



// ******************************************************
// :first-child, :last-child, :only-child, :first-of-type, :last-of-type,
// :only-of-type, :nth-child(), :nth-last-child(), :nth-last-of-type(),
// :nth-of-type()
// ******************************************************

// for b in p which is the only child set font size 36px

// for em in p which is the last child of type set color to green




// ******************************************************
// [name], [name|='value'], [name*='value'], [name~='value'],
// [name$='value'], [name^='value']
// [name!='value'] /* neither such attribute nor specified value */
// ******************************************************

// set width 80px for input with attribute name ended by 'age'
// set width 120px for input with attribute name started by 'my'
// console.log checked checkbox
// show all images with a cat


// ******************************************************
// is(), not(), has()
// eq(), first(), last()
// find(), parent(), parents(), closest()
// children(), prev(), next(), siblings()
// ******************************************************
// for .mbox with index 3 set padding-top 50px
// for first div wraper for img set float left and border red
