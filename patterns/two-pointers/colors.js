function sortColors(colors) {

  let p1 = 0;
  let p2 = colors.length - 1;

  while (p1 <= p2) {
    // console.log("Called Here", p1, p2)
    if (colors[p1] === 0) {
      if (colors[p2] !== 0) {
        p2--
      }
      p1++;
    } else {
      // console.log("Called Here", p1, p2, colors[p1], colors[p2])
      if (colors[p2] === 0) {
        colors = swap(colors, p1, p2);
        // console.log("sorted colors", colors);
        p1++;
      }
      p2--;
    }

  }
  // Replace this placeholder return statement with your code
  p2 = colors.length - 1;

  while (p1 <= p2) {
    if (colors[p1] === 1) {
      if (colors[p2] !== 1) {
        p2--
      }
      p1++;
    } else {
      if (colors[p2] === 1) {
        colors = swap(colors, p1, p2);
        p1++;
      }
      p2--;
    }

  }

  return colors;
}

function swap(colors, idx1, idx2) {
  let temp = colors[idx1];
  colors[idx1] = colors[idx2];
  colors[idx2] = temp;
  return colors;
}


const colors = [0,1,0,0,1,2,1,0,1];


console.log(sortColors(colors));