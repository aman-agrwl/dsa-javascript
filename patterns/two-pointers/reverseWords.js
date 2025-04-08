function reverseWords(sentence) {

  // Replace this placeholder return statement with your code

  let array = sentence.split(" ");
  array = array.filter(item => item !== "")
  let start = 0
  let end  = array.length-1;
  let ans = ""
  while (start <= end) {
    ans = swap(array, start, end)
    start++;
    end--;
  }
  
  
  
  return ans.join(" ");
}


function swap(array, idx1, idx2) {
  console.log("sentence", array);
  let temp = array[idx1].trim();
  array[idx1] = array[idx2].trim();
  array[idx2] = temp;
  return array;
}

console.log(reverseWords("Hello     World"));