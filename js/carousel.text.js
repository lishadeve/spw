// // values to keep track of the number of letters typed and array position
// // Don't change these values.
// let i = 0,
//   a = 0,
//   isBackspacing = false,
//   isParagraph = false;

// let [eParagraph] = document.getElementsByClassName("caroutext"); //Render element

// // Typerwrite text content
// var textArray = JSON.parse(eParagraph.getAttribute("data-strings"))

// // Speed (in milliseconds) of typing.
// let speedForward = parseInt(eParagraph.getAttribute("data-speed")), //Typing Speed
//   speedWait = 10 * speedForward, // Wait between typing and backspacing
//   speedBackspace = speedForward / 4; //Backspace Speed

// const typeWriter = (id, ar) => {
//   let aString = ar[a]
//   // Determine if animation should be typing or backspacing
//   if (!isBackspacing) {
//     // If full string hasn't yet been typed out, continue typing
//     if (i < aString.length) {
//       eParagraph.innerHTML = eParagraph.innerHTML + aString.charAt(i);
//       i++;
//       setTimeout(() => {
//         typeWriter(id, ar);
//       }, speedForward);
//     }

//     // If full string has been typed, switch to backspace mode.
//     else if (i == aString.length) {
//       isBackspacing = true;
//       setTimeout(function () {
//         typeWriter(id, ar);
//       }, speedWait);
//     }
//   } else {
//     // If paragraph still has text, continue backspacing
//     if (eParagraph.innerHTML.length > 0) {
//       // If paragraph still has text, continue erasing
//       eParagraph.innerHTML = eParagraph.innerHTML.substring(
//         0,
//         eParagraph.innerHTML.length - 1
//       );

//       setTimeout(function () {
//         typeWriter(id, ar);
//       }, speedBackspace);

//       // If neither head nor paragraph still has text, switch to next string.
//     } else {
//       isBackspacing = false;
//       i = 0;
//       isParagraph = false;
//       a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
//       setTimeout(function () {
//         typeWriter(id, ar);
//       }, 50);
//     }
//   }
// };

// //Run the loop
// typeWriter("caroutext", textArray);