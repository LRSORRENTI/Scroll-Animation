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
  const trggerBottom = window.innerHeight / 5 * 4
//now we select our .box's  that are saved to the variable
//boxed with document.querySelectorAll('.box')
  boxes.forEach(box => {
    //remember, forEach loops, so we're looping through the 
    // node list here
    const boxTop = box.getBoundingClientRect
  })
}