var flipped = false

function f1() {
  global flipped;
  if flipped {
    document.getElementById("test1).innerHTML = "Hello, World!";
    flipped = false;
  }
  else {
    document.getElementById("test1").innerHTML = "Hello, test!";
    flipped = true;
  }
}

