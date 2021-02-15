"use strict";
splitColor();

function splitColor() {
  console.log(splitColor);
  const color = "#C0D3C5";
  let r = color.substring(1, 3);
  let g = color.substring(3, 5);
  let b = color.substring(5);
  console.log(r);
  console.log(g);
  console.log(b);
  let C0 = parseInt(r, 16);
  let D3 = parseInt(g, 16);
  let C5 = parseInt(b, 16);
  console.log(C0);
  console.log(D3);
  console.log(C5);
}
