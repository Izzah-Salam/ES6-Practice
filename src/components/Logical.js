// the concept of logical AND && and OR ||

export default function Logical() {
  // >>>>.....logical && ......<<<<
  // if both condition is true than true if one false than it return false

  let a = true;
  let b = true;

  if (a && b) {
    console.log("Both value are tru");
  } else {
    console.log("Both values are false");
  }

  // >>>>.....logical ||......<<<<
  // if both condition is false than false if either is true than it return true
  let c = false;
  let d = true;

  if (c || d) {
    console.log("Both value are tru");
  } else {
    console.log("Both values are false");
  }
}
