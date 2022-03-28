let x = 1;
function func() {
  console.log(x); // * cannot access x because it hasn't been intalized in the local yet
  let x = 2;
}
func(); 