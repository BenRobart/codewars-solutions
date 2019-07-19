function accum(s) {
 s = s.toLowerCase();
 var segmented = []
 var length = s.length
 for (i = 0; i < length; i++) {
  segmented[i] = s.slice(i, i + 1)
  for (j = 0; j <= i; j++){
   if (j < i && j == 0) { // if it's the first letter of this segment, capitalise it
    document.write(segmented[i].toUpperCase())
   }
   else if (j < i && j != 0) { // if it's neither the first nor the last letter of this segment, output it normally
    document.write(segmented[i])
   }
   else if (j == i && j == 0) { // if it's the first letter in the whole string (i.e. only printed once), capitalise it AND hyphenate it
    document.write(segmented[i].toUpperCase()+"-")
   }
   else if (j == i && i != length-1) { // if it's the last letter of this segment, hyphenate it
    document.write(segmented[i]+"-")
   }
   else if (j == i && i == length-1){ // if none of the previous criteria are satisfied, it's the end of the whole string, and so should be outputted normally with no hyphen
                                      // this line could also be written as else {, with no parameters, and would have the same effect
    document.write(segmented[i])
   }
  }
 }
}
accum("dicks")

/* this is an absolute mess, so I've got an alternative from luke below:
function accum(s) {
 s = s.toLowerCase();
 var letter;
 var segmented = []
 var length = s.length
 for (i = 0; i < length; i++) {
  segmented[i] = s.slice(i, i + 1)

  for (j = 0; j <= i; j++){

    if (j === 0) {
        letter = segmented[i].toUpperCase()
    } else {
        letter = segmented[i]
    }

   if (j < i) {
    document.write(letter)
   }
   else {
    document.write(letter+"-")
   }
  }
 }
}
accum("test")
*/
