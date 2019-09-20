// add event handler
function submitComment() {
    //console.log("Hello")//
    const inputField = document.getElementById("name")
    const name = inputField.value
        //console.log(name);
    const textArea = document.getElementById("msg")
    const msg = textArea.value
        //console.log(textArea)
        //console.log(msg)

    // create the elements you need
    const comment = document.createElement("section")
    const h3 = document.createElement("h3")
        // Create an element (right to left is the way you should read the code and translate
        // to "normal text" called section and then assign it to a variable h3)
        //console.log(h3)

    // adjust the elements we created
    h3.innerHTML = `${name} said:`
    const p = document.createElement("p")
    p.innerHTML = msg
    comment.classList.add("comment")
    comment.appendChild(h3)
    comment.appendChild(p)
        ///console.log(name)

    const commentSection = document.getElementById("comments")
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null
}

// 1. Above I'm declaring a variable for both inputField (and then the same thing goes
// for the textarea --> .html file), and assigning it to
//    An element(inside DOM) with the id "name"
// 2. Console the inputField and see if it works ->
// 3. Console log name and see if i can put my name in and get it in my browser
// 4. Do the same thing for textArea
// 5. Creating an element called section and assign it to a variable "section" (see above for more)
// 6. Console.log() to see if it exists
// 7. Creating an element called h3 and assign it to a variable "h3"
// 6. Console.log() to see if it exists in the browser --> <h3></h3>
// 7. Creating an element called "p" and assign it to a variable p (see above for more)
// 8. Console.log() to see if it exists in the browser --> <p></p>
// 9. creating the innerHTML by adding it to both h3 and (p 10.) with h3.innerHTML = `${name} said:`
// 10. p.innerHTML = msg
///11.  comment.classList.add("comment") - JS, adding a class/(section), "comment", 
// to our var comment.
/// instead of doing it like this: <section> class = "comment"></section>- in html
/// 12. Then I'm appendChild(), both the name + msg of the person who puts it in. I'm appending
/// it to the exisiting parent class, which already have a comment there (?)
/// 13. console.log(commentSection)
/// 14. Select this element using the 
/// 15. getElementById-method and store it in the variable commentSection.
/// 16. Console and see if it works in the browser - check
/// 17.Use the appendChild-method on commentSection to 
///    add your comment-variable to commentSection.
/// 18. Let's reset the input fields!
///     Reassign the value-property of inputField to null.
///     Reassign the value-property of textArea to null