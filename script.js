const boxes = document.querySelectorAll('.box')
//The above puts all the .box into a node list
window.addEventListener('scroll', checkBoxes)
//the above selects the window object to fireoff an event 
//when we scroll

checkBoxes()

function checkBoxes(){
    //the console.log will log the current window height to the 
    //browswer console, in my case it initially logged 1048, but 
    // it could log a wide range of numbers based on the window size
   //console.log(window.innerHeight / 5 * 4)
   //and to create a trigger point, we'll divide the window 
   //height by 5 then multiply by 4
  const triggerBottom = window.innerHeight / 5 * 4
//now we select our .box's  that are saved to the variable
//boxed with document.querySelectorAll('.box')
  boxes.forEach(box => {
    //remember, forEach loops, so we're looping through the 
    // node list here. so were going to set the current box 
    // with the built in method box.getBoundingClientRect
    //and what this method does is return a 'DOMRect' object,
    // DOMRect meaning it describes the size and shape of  
    // a rectangle, and then it provides info about 
    //the size and shape of an element, and it's position to 
    //the viewport, and in our case, we want to find out where the 
    //top of a particular box div is, so at the end we add .top, 
    //and that will return the top value

    const boxTop = box.getBoundingClientRect().top
//Then after we find out where the top of the box is from above,
//all we need to do after that is see if the top of the box 
//is LESS than the trigger bottom, if true then add the class of 
//show, if not (if it's more than the trigger bottom, then remove 
//the class of show)
if(boxTop < triggerBottom){
    //below we're now adding the classList 
    box.classList.add('show')
} else{
    box.classList.remove('show')
}

  })
}